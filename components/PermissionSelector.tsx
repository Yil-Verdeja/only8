import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export type PermissionType = "none" | "read" | "write";

const isValidPermission = (value: string) => {
	return ["none", "read", "write"].includes(value);
};

type PermissionDescriptionMap = {
	[key in PermissionType]: string;
};

export const permissionDescriptions: PermissionDescriptionMap = {
	none: "None",
	read: "Only Read",
	write: "Read & Write",
};

const PermissionSelector = ({
	label,
	selectedPermission,
	onSelect,
}: {
	label: string;
	selectedPermission: PermissionType;
	onSelect: (value: PermissionType) => void;
}) => {
	return (
		<>
			<Label>{label}</Label>
			<RadioGroup
				orientation="horizontal"
				name={label}
				value={selectedPermission}
				onValueChange={(value) => {
					if (isValidPermission(value))
						onSelect(value as PermissionType);
					else
						console.error(
							"Invalid permission type received: ",
							value
						);
				}}
			>
				{Object.entries(permissionDescriptions).map(([key, value]) => (
					<div key={key} className="flex items-center space-x-2">
						<RadioGroupItem value={key} id={key} />
						<Label htmlFor={key}>{value}</Label>
					</div>
				))}
			</RadioGroup>
		</>
	);
};

export default PermissionSelector;
