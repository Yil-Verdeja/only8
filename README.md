# Only8

## Design
### Users
User information
```typescript
interface User {
  id: number;
  name: string;
  is_verified: boolean;
}
```

#### Methods
* getUsers: gets all the users to be displayed in the combo box

### AccountManagers
The relationship between account holder and user to manage the account. Both must be valid users in the application.
```typescript
enum AccountManagerStatus {
	ACCEPTED = "accepted",
	REJECTED = "rejected",
	PENDING = "pending",
}

type PermissionType = "none" | "read" | "write";

export default interface AccountManager {
	id: number;
	account_user_id: number;
	manager_user_id: number;
	status: AccountManagerStatus;
	post_permission: PermissionType;
	message_permission: PermissionType;
	profile_permission: PermissionType;
	expiry_at?: Date;
	created_at: Date;
	updated_at: Date;
}
```

#### Methods
* createAccountManager: for inviting external users to manage a users account with certain permissions
* deleteAccountManager: allows the account user to delete an AccountManager if they are the account holder
* updatePermissions: allows the account user to update the permissions
* acceptInvite: changes the status to "accepted" from an invite received by the manager user
* rejectInvite: changes the status to "rejected" from an invite received by the manager user
* getInvitesGiven: searches all AccountManagers where account_user_id is equal to the account user (signed in user)
* getInvitesReceived: searches all AccountManagers where manager_user_id is equal to the account user

## Late Night Thoughts
Honestly, it was quite a struggle to set up the whole project with all those required dependencies.

I actually didn't want to submit this task because I was having a hard time just debugging the project.

So I decided to move to using NextJS, and ShadCN UI.

Time of Start: 1:14AM, October 9th 2024
