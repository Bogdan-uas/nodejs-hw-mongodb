# THIS IS NOT A WEBSITE, THAT'S A SERVICE!

(there is actually a "website", that is working on this code, but its purpose of existence is so the code works and works properly.)

A back-end app that does properly work on Postman.

A service provides some ways to put all of your contacts into db(they're all stored in JSON-format).

You can: 👇👇👇

# P. S. Pro-tip

For the best "experience" create such a structure:

![Image](https://github.com/user-attachments/assets/4d5a82b2-12d6-4e82-8032-696232e0c775)

Where "Contacts App" is a collection, in which there are two folders, which contain requests.

# Also important!

<b>Before starting "learning" how to use the service, you need to scroll down the page, until you see "Account System"(or just use navigation on the top of Readme-file). This is because if you won't register and log in, you won't be able to use the service(it will be locked).</b>

#

# 1. Get all of them at once (GET):

<i>getAllContacts</i>

![Image](https://github.com/user-attachments/assets/7ca2f489-8f69-4e61-87b7-2a6f6c206653)
![Image](https://github.com/user-attachments/assets/7f6de39e-0c96-4830-8e6f-02d2ab282a91)

("{{domain}}" is the "website's" link)

There are some params that you can use:

 - perPage: how many contacts should be shown on one page
 - page: what page should now be opened
- sortBy: by what should the contacts be sorted(a key should be entered, not value of something!!!)
- sortOrder: two options = {

    desc: descending,

    asc: ascending
  
  }
- ("contactType", "isFavourite", etc. ): could be any key, will be sorted by the value, what you have written there

To be the most comfortable, write into Params, as "Key"-what option and "Value"-how much:

![Image](https://github.com/user-attachments/assets/88482671-90a8-4f9b-acea-5cf161008434)

# 2. Get a single one by its id (GET):

<i>getContactById</i>

![Image](https://github.com/user-attachments/assets/716759ec-b6c3-4e76-8d02-88356f45a542)

(We need the value of red-underlined "\_id")

Then we can put the id here:

![Image](https://github.com/user-attachments/assets/870f82ff-f8f3-4c23-a696-cec00cb8d84d)

And press:

![Image](https://github.com/user-attachments/assets/1db1fa48-52a0-4140-9bb5-7357166a0c18)

And then we receive the contact that we wanted to find:

![Image](https://github.com/user-attachments/assets/b150be22-cec1-4ae6-85d0-5673a5d69380)

# 3. Create a new one (POST):

<i>createNewContacts</i>

To create a new one, you need firstly to do this:

![Image](https://github.com/user-attachments/assets/e63eb741-08a5-4b8c-be3a-3910e0c89777)

Then open "Body"...:

![Image](https://github.com/user-attachments/assets/44faab5e-17de-4a32-aef0-d79b656b12a2)

And choose checkbox "raw" and the JSON:

![Image](https://github.com/user-attachments/assets/3d4bdd29-25fd-415c-a21a-1631e2c522d6)

Lastly, you need to write some very hard JSON code(you can even write one param(valid param!), (only one is required for the request to be fulfilled)("userId" and "\_id" will be generated, you don't need to write your own ones!!!) and press the button "SEND":

![Image](https://github.com/user-attachments/assets/132e040d-c151-40fe-bd5d-00a37d790421)

And there you have it, your new contact:

![Image](https://github.com/user-attachments/assets/ac0b92d3-7bb6-49ea-86cc-f5787243cf7a)

(You can now also see this new contact in whole contact library):

![Image](https://github.com/user-attachments/assets/ca7921a2-8ab3-4c94-bc8f-f4f28d781581)

# 4. Change some info about a specific contact (PATCH):

<i>changeContacts</i>

For example, after some time you added your new contact, you need to change some info about him. There you need PATCH-request. I also need to change some info about my contact, Tim Cheese:

![Image](https://github.com/user-attachments/assets/23a190f2-1887-409d-8a09-918e38461f12)

(That id is his)
Then we need to open "Body", then check the checkbox "raw" and pick "JSON". Then you can again put even 1 param(valid param!), i put two:

![Image](https://github.com/user-attachments/assets/e41cb136-7bbd-433f-b85d-352beafbb4f5)

Press then button "SEND" and there you have your patched contact:

![Image](https://github.com/user-attachments/assets/175c26da-eddc-4b72-98cd-d5370e09ec81)
![Image](https://github.com/user-attachments/assets/711b844e-dce5-4853-927e-6c2453772c03)

# 5. Delete them (DELETE):

<i>deleteContacts</i>

After some time, Tim Cheese has gone crazy and he's no longer my contact. I need to delete him from my library and forget about him. That's where i need DELETE-method:

![Image](https://github.com/user-attachments/assets/5d6bb8bf-9bd3-46f5-9d3b-d7a661e271b0)

So then, firstly i need to put Tim Cheese's contact id into the request:

![Image](https://github.com/user-attachments/assets/9db68f38-6872-4535-9837-ad445bbb5653)

Afterwards, you just need to press the button "SEND":

![Image](https://github.com/user-attachments/assets/35c28eab-7251-4899-aead-f2dee93b5e9e)

No additional info, nothing, just a "204 No Content", which means that you have successfully deleted it. You won't see it anywhere :

![Image](https://github.com/user-attachments/assets/55064cdc-2254-4d92-8121-b2eceddb35b7)
![Image](https://github.com/user-attachments/assets/b12acf9a-a57d-45d5-b176-d685a272bb26)
![Image](https://github.com/user-attachments/assets/1cfa114d-ee6d-4c9e-8d7e-9dfd0eb5a899)

#

<i>
It's obvious, that when you have a service where you can store your personal data, you must have some account where your data is safe. So, if we want to store our contacts, we need authentication for every user.
</i>

# Account System

So, we need privacy to every user. Firstly, to start adding your contacts, you need to register:

![Image](https://github.com/user-attachments/assets/b7d1a566-3a9b-4759-b8cc-e93f379db915)

Once again, you should do the same what you did with POST-requests:

![Image](https://github.com/user-attachments/assets/5a2cdf7c-6aa1-4372-9111-8ed7db8138b3)

I take as an example some user by the name of Bimbaclat.

After that, i press "SEND" button and:

![Image](https://github.com/user-attachments/assets/bec7f66e-70a1-45a2-96c7-67c6b021ef7b)

Then we need to login with our email and password(no name needed!):

![Image](https://github.com/user-attachments/assets/ebab47e6-4098-45b1-a443-0e36eea5e1b2)
![Image](https://github.com/user-attachments/assets/c118c05b-bb67-4e5b-96f1-954d7e763383)

And here we need to put some changes not only in "Body" but also in "Scripts":

![Image](https://github.com/user-attachments/assets/a6b3ed48-3e45-4c77-8a64-0398651bce37)

Here you need to choose Post-response on the left and write some code before logging in:

```js
const jsonData = JSON.parse(responseBody);
pm.environment.set("access_token", jsonData.data.accessToken);
```

And after that, you need to go to your collection "Contacts App" and change some params:

![Image](https://github.com/user-attachments/assets/7fd7d4a6-2098-43e2-827b-46d238037031)

Go into Authorization:

![Image](https://github.com/user-attachments/assets/989bf154-70a8-48a7-b0b3-c2f2c30d6dab)

Choose at the "Auth Type" - Bearer Token
And type in the field "Token":

`{{access_token}}`

Then go to every folder and request(to Authorization) and choose at the "Auth Type":

![Image](https://github.com/user-attachments/assets/d8465fa6-29f8-4a08-9c85-63bce08e47ef)

Then go back to POST-request "login" and finally press the button "SEND". After that, you'll see this:

![Image](https://github.com/user-attachments/assets/8bbf80ed-e89f-48b1-a4d5-3f02c72e6066)

This "accessToken" is our guarantee to access to our contacts(his life is only 15 minutes!!!). And that code what we have written saves the value of Access Token into constant `{{access_token}}` that will be inherited by every request and then you can use the app freely.(There are also refreshToken and SessionId that are being generated with the accessToken, but they live for 1 day and you don't actually need them. But if you're interested, go into Cookies file)

After you finish all your work, you need to logout:

![Image](https://github.com/user-attachments/assets/d5105e39-5de0-442f-ae78-cacd826db763)

You don't need to write something, just press the button "SEND" and you're good to go:

![Image](https://github.com/user-attachments/assets/5f5fb24e-6658-4b9b-b886-61080cc7923c)

But if your session is going more than 15 minutes and you're not finished, you need to refresh the accessToken. So we go to refresh-request:

![Image](https://github.com/user-attachments/assets/676a69ae-808d-4b2f-a1f9-4fbf5054eef2)

You will receive here also accessToken, so you need here also that code, that you have written into login-request:

![Image](https://github.com/user-attachments/assets/80a1dd02-dab3-4c2a-853f-cef31edef592)

Then you press the button "SEND" and you can work then further:

![Image](https://github.com/user-attachments/assets/918d57ae-39ab-4143-a1a7-97dd5d933e11)

#

<b>But you must know, all this can be done in Postman(not on a "website"), with the link of deployed back-end.</b>
