/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/Command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/Popover";
import User from "../entities/User";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import useUsers from "@/hooks/useUsers";

interface Props {
	selectedUser: User | null;
	onSelected: (user: User | null) => void;
}

const UserComboBox = ({ selectedUser, onSelected }: Props) => {
	const { data: users, isLoading, error } = useUsers();
	const [open, setOpen] = React.useState(false);

	const handleUserSelection = (userName: string | null) => {
		const user =
			users && userName
				? users.find((user) => user.name === userName)
				: null;
		onSelected(user ?? null);
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{selectedUser ? selectedUser.name : "Select user..."}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput
						placeholder="Search user..."
						className="h-9"
					/>
					<CommandList>
						<CommandEmpty>No user found.</CommandEmpty>
						<CommandGroup>
							{users &&
								users.map((user) => (
									<CommandItem
										className="flex gap-2"
										key={user.id}
										value={user.name}
										onSelect={handleUserSelection}
									>
										<Avatar className="w-10 h-10">
											<AvatarFallback>
												{user.name
													.split(" ")
													.reduce(
														(acc, text) =>
															(acc += text[0]),
														""
													)}
											</AvatarFallback>
										</Avatar>
										<span>{user.name}</span>
										<CheckIcon
											className={cn(
												"ml-auto h-4 w-4",
												selectedUser?.id === user.id
													? "opacity-100"
													: "opacity-0"
											)}
										/>
									</CommandItem>
								))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default UserComboBox;
