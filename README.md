# THIS IS NOT A WEBSITE, THAT'S A SERVICE!

(there is actually a "website", that is working on this code, but its purpose of existence is so the code works and works properly.)

A back-end app that does properly work on Postman.

A service provides some "contacts"(all stored in JSON-format), which you can interact with.

You can ----->

# Get all of them at once:

![Image](https://github.com/user-attachments/assets/7ca2f489-8f69-4e61-87b7-2a6f6c206653)
![Image](https://github.com/user-attachments/assets/7f6de39e-0c96-4830-8e6f-02d2ab282a91)

("{{domain}}" is the "website's" link)

# Get a single one by its id:

![Image](https://github.com/user-attachments/assets/716759ec-b6c3-4e76-8d02-88356f45a542)

(We need the value of red-underlined "\_id")

Then we can put the id here:

![Image](https://github.com/user-attachments/assets/870f82ff-f8f3-4c23-a696-cec00cb8d84d)

And press:

![Image](https://github.com/user-attachments/assets/1db1fa48-52a0-4140-9bb5-7357166a0c18)

And then we receive the contact that we wanted to find:

![Image](https://github.com/user-attachments/assets/b150be22-cec1-4ae6-85d0-5673a5d69380)

# Create a new one (POST):

To create a new one, you need firstly to do this:

![Image](https://github.com/user-attachments/assets/e63eb741-08a5-4b8c-be3a-3910e0c89777)

The open "Body"...:

![Image](https://github.com/user-attachments/assets/44faab5e-17de-4a32-aef0-d79b656b12a2)

And choose checkbox "raw" and the JSON:

![Image](https://github.com/user-attachments/assets/3d4bdd29-25fd-415c-a21a-1631e2c522d6)

Lastly, you need to write some very hard JSON code(you can even write one param, only one is required for the request to be fulfilled)("userId" and "\_id" will be generated, you don't need to write your own ones!!!) and press the button "SEND":

![Image](https://github.com/user-attachments/assets/132e040d-c151-40fe-bd5d-00a37d790421)

And there you have it, your new contact:

![Image](https://github.com/user-attachments/assets/ac0b92d3-7bb6-49ea-86cc-f5787243cf7a)

delete them: or change some info about a specific contact. But you must know, all this can be done in Postman(not on a "website"), with the link of deployed back-end.
