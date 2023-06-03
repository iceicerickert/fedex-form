import { Injectable } from '@angular/core';
import { ApiUser } from './apiuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected submittedUser: ApiUser = {} as ApiUser;

  getSumbittedUser(): ApiUser {
    return this.submittedUser;
  }

  async submitUser(firstName: string, lastName: string, email: string, surnamePreposition?: string): Promise<void> {
    if (surnamePreposition) {
      lastName = surnamePreposition + ' ' + lastName;
    }
    console.log(`Gonna submit user:\nfirstName: ${firstName}\nlastName: ${lastName}\nemail: ${email}`);

    const response = await fetch('https://demo-api.now.sh/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email
      }),
    });
    const userResponse = await response.json();
    this.submittedUser = new ApiUser(userResponse._id, userResponse.firstName, userResponse.lastName, userResponse.email);
    console.log(`User stored with id ${userResponse._id}`);
  }
}
