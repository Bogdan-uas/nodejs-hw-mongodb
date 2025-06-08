# THIS IS NOT A WEBSITE, THAT'S A SERVICE!

(there is actually a "website", that is working on this code, but its purpose of existence is so the code works and works properly.)

A back-end app that does properly work on Postman.

A service provides some ways to put all of your contacts into data base(they're all stored in JSON-format).

You can: 👇👇👇

# P. S. Pro-tip

For the best "experience" create such a structure:

![Image](https://github.com/user-attachments/assets/00a5baf7-7cdf-456e-87c1-391327838653)

Where "Contacts App" is a collection, in which there are two folders, which contain requests.

# Also important!

<b>After creating a file line-up, you need to scroll down the page, until you see "Account System"(or just use navigation on the top of ReadMe-file). This is because if you won't register and log in, you won't be able to use the service(it will be locked).</b>

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

- ("contactType", "isFavourite", etc. ): could be any key, will be sorted by the value, what you have written there, as for example in the example picture

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

Lastly, you need to write some very hard JSON code(you can even write one param(valid param!)), (only one is required for the request to be fulfilled)("userId" and "\_id" will be generated, you don't need to write your own ones!!!) and press the button "SEND":

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
Then we need to open "Body", then check the checkbox "raw" and pick "JSON". Then you can again put even 1 param(valid param!), I put two:

![Image](https://github.com/user-attachments/assets/e41cb136-7bbd-433f-b85d-352beafbb4f5)

Press then button "SEND" and there you have your patched contact:

![Image](https://github.com/user-attachments/assets/175c26da-eddc-4b72-98cd-d5370e09ec81)
![Image](https://github.com/user-attachments/assets/711b844e-dce5-4853-927e-6c2453772c03)

#

And after all, it's not excluded to include some photos in both PATCH and POST-requets. On our service, this can be done. Here you need to go again in "Body", but this time, you need to choose "form-data" instead of "raw":

![Image](https://github.com/user-attachments/assets/2ba3aa9c-b684-481b-9bf6-cbb66a3c1ae8)

Here you need to write in the "Key"-field: photo(this should be strictly photo, if you will write something else, you won't be able to upload a photo), choose next to it: "File", and then you should choose a photo which you would like to have on the contact you're patching or creating.:

![Image](https://github.com/user-attachments/assets/c722171b-d012-43c6-a2d1-10ec2ef2b9de)

I installed also a photo, for my friend Tim Cheese, so he has an avatar in my Contacts App:

![image](https://github.com/user-attachments/assets/34d4e375-3727-496a-9656-19d99580794d)

Then we press the button "SEND" and here you have it:

![image](https://github.com/user-attachments/assets/94b9b1f4-3ddf-4c91-8cca-e36c38b4fd30)

You can hover on that link and with pressed Control (if on Mac, Command), then you will open it in your main browser and see the photo:

![image](https://github.com/user-attachments/assets/b93e1ff7-6a06-406f-865c-85dbb1ea1f45)

(And yes, "form-data" can be an alternative to "raw" with "JSON", for those who don't like to write on JSON.)

#

# 5. Delete them (DELETE):

<i>deleteContacts</i>

After some time, Tim Cheese has gone crazy and he's no longer my contact. I need to delete him from my library and forget about him. That's where I need DELETE-method:

![Image](https://github.com/user-attachments/assets/5d6bb8bf-9bd3-46f5-9d3b-d7a661e271b0)

So then, firstly I need to put Tim Cheese's contact id into the request:

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

<i>register</i>

So, we need privacy to every user. Firstly, to start adding your contacts, you need to register:

![Image](https://github.com/user-attachments/assets/b7d1a566-3a9b-4759-b8cc-e93f379db915)

Once again, you should do the same, what you did with POST-requests:

![Image](https://github.com/user-attachments/assets/5a2cdf7c-6aa1-4372-9111-8ed7db8138b3)

I take as an example some user by the name of Bimbaclat.

After that, i press "SEND" button and:

![Image](https://github.com/user-attachments/assets/bec7f66e-70a1-45a2-96c7-67c6b021ef7b)

#

<i>login</i>

Then we need to login with our email and password(no name needed!):

![Image](https://github.com/user-attachments/assets/ebab47e6-4098-45b1-a443-0e36eea5e1b2)
![Image](https://github.com/user-attachments/assets/c118c05b-bb67-4e5b-96f1-954d7e763383)

And here we need to put some changes not only in "Body" but also in "Scripts":

![Image](https://github.com/user-attachments/assets/a6b3ed48-3e45-4c77-8a64-0398651bce37)

Here you need to choose Post-response on the left and write some code before logging in:

```js
const jsonData = JSON.parse(responseBody);
pm.environment.set('access_token', jsonData.data.accessToken);
```

And after that, you need to go to your collection "Contacts App" and change some params:

![Image](https://github.com/user-attachments/assets/f2caec17-1bd7-4565-ab57-7e9a8ddc9c01)

Go into Authorization:

![Image](https://github.com/user-attachments/assets/989bf154-70a8-48a7-b0b3-c2f2c30d6dab)

Choose at the "Auth Type" - Bearer Token
And type in the field "Token":

`{{access_token}}`

Then go to every folder and request(to Authorization) and choose at the "Auth Type":

![Image](https://github.com/user-attachments/assets/d8465fa6-29f8-4a08-9c85-63bce08e47ef)

Then go back to POST-request "<i>login</i>" and finally press the button "SEND". After that, you'll see this:

![Image](https://github.com/user-attachments/assets/8bbf80ed-e89f-48b1-a4d5-3f02c72e6066)

This "accessToken" is our guarantee to access to our contacts(his life is only 15 minutes!!!). And that code what we have written, saves the value of Access Token into constant `{{access_token}}` that will be inherited by every request and then you can use the app freely.(There are also refreshToken and SessionId that are being generated with the accessToken, but they live for 1 day and you don't actually need them. But if you're interested, go into Cookies file)

#

<i>logout</i>

After you finish all your work, you need to log out:

![Image](https://github.com/user-attachments/assets/d5105e39-5de0-442f-ae78-cacd826db763)

You don't need to write something, just press the button "SEND" and you're good to go:

![Image](https://github.com/user-attachments/assets/5f5fb24e-6658-4b9b-b886-61080cc7923c)

#

<i>refresh</i>

But if your session is going more than 15 minutes and you're not finished, you need to refresh the accessToken. So we go to refresh-request:

![Image](https://github.com/user-attachments/assets/676a69ae-808d-4b2f-a1f9-4fbf5054eef2)

You will receive here also accessToken, so you need here that code, that you have written into login-request:

![Image](https://github.com/user-attachments/assets/80a1dd02-dab3-4c2a-853f-cef31edef592)

Once we already configured how the accessToken will be shared amongst all other requests, press the button "SEND" and you can work then further:

![Image](https://github.com/user-attachments/assets/918d57ae-39ab-4143-a1a7-97dd5d933e11)

#

<i>request reset email</i> + <i>reset password</i>

Sometimes happens that after a long time, after firstly signing up into some service, you forget a password, which you have always logged in with. Then you can't log into your account and you can't use a service normally then. The same can happen at our service. But still, even if you forgot your password, there can be solution for you(depends on the service, if they have such logic). If you remember your email, you can then write it there where it is needed and receive a letter with a form, where you can restore your password. In our service, that's a little bit more simple.

So, if you somehow forgot a password to your account on the service, but remember an email, you've signed up with, then firstly you need to go into "<i>request reset email</i>":

![Image](https://github.com/user-attachments/assets/b0767698-d4a6-4535-8d54-0d8b9fca9b88)

After that, you need to go into the same path, which you always have gone with and write only! one param, your "email" of your registered account(if the email, which you have registered on the service with, is a fictional one(i mean, it hasn't ever existed), you won't be able to restore a password, because after submitting, a letter will be sent to an email, you've typed in). I also forgot a password to my service account, so I need also this:

![Image](https://github.com/user-attachments/assets/4fd6e1a5-63bc-4dc8-8695-e13a85b0e680)

We press button "SEND" and here it is:

![Image](https://github.com/user-attachments/assets/d4362f06-a6b6-4af1-98f0-85047605d923)

After that, go to your email-service(in my case, that's Gmail) and open the latest message, you've received:

![Image](https://github.com/user-attachments/assets/b03aff3b-a1d1-47e4-9c55-1a114ea76dfb)

(A name can be different) So, here we need to click on the blue, underlined link "here" and you will redirected to a "website" that will look something like this:

![image](https://github.com/user-attachments/assets/34a12e35-8d24-4046-aa81-5f8557a90f9d)

We need a link of the "website", specifically a param "token=" that has some random letters and numbers. This token is a JWT(JSON Web Token). It's long and hard to explain, just look up in the Internet, but in short: it is a token, where there is stored some info about you. We need to copy it and paste it already in <i>reset password</i>:

![image](https://github.com/user-attachments/assets/87fdc61e-0d5d-4596-9edc-46c824b27d09)

Here we need, once again, to open "Body", then "raw" and "JSON" and write two params: 

![image](https://github.com/user-attachments/assets/5dcd527f-5f46-4f75-9982-7dbe5092dad8)

First one, is a token you've copied and other one is a new password. After pressing a button "SEND", you'll receive:

![image](https://github.com/user-attachments/assets/a7b7a9c6-9c0d-4e2e-a785-60693f58c5ad)

And now this password will be your main one. 

You also need to remember that, JWT's life, after sending an email, is only five minutes long!!!
If the token is expired, make a new request to resend the email.

#

<i>confirm oauth</i> + <i>get oauth url</i>

There can be also another way, how you register or log in. This another way is via Google Oauth. And on our service this also works, that's why if you don't want to remember what account data you have, you should go this way. Firstly, go to GET-request "<i>get oauth url</i>":

![Image](https://github.com/user-attachments/assets/988ddb95-ccee-46a4-b8ce-d9892b5c70bd)

You don't need to write something in here, just press the button "SEND" and you'll receive an URL then:

![image](https://github.com/user-attachments/assets/2af8c6ef-976a-4d12-a437-8093e4e7dd10)

You need to press on that link with pressed Control (if on Mac, Command) and then you will be redirected into your main browser to "some" website. There you need again a link of that "website" and you need to copy it entirely:

![Image](https://github.com/user-attachments/assets/17a3df43-9a2c-4ad7-ad6b-1e4b6ed24d4d)

Then you need to go to <i>confirm oauth</i> where you need to go once again to "Body", then choose "raw" and "JSON". Then you need to write there "code": "" and paste that copied URL:

![Image](https://github.com/user-attachments/assets/813ef7f2-e130-41a1-a8cb-fcc197dba2ca)
![Image](https://github.com/user-attachments/assets/650b0642-dcc8-49f9-861a-3904e2eabbfa)

Then you need to delete "<i>http://localhost:3000/confirm-google-auth?code=</i>" and then "<i>&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none</i>", so it remains only a token, that looks something like this:

![Image](https://github.com/user-attachments/assets/a53f382b-d2b1-4992-9990-c6caea15b2e0)

But you need also to replace these three letters with slash!:

![Image](https://github.com/user-attachments/assets/6253efb3-bdf2-4e35-9f16-edba32ccd0b2)
![Image](https://github.com/user-attachments/assets/0f33d20c-876d-4f0a-b117-0db942aaceb6)

(If you didn't understand how to delete all that stuff so in the end, you have a token, i will help you now to understand it. So just to remember, look for "code=" and "&scope=" in the URL and everything that stands before "code=" and after "&scope=", needs to be deleted(including these names). And second, third and fourth letters of what has remained, need to be replaced by slash(/))

Then press the button "SEND" and there you have it:

![Image](https://github.com/user-attachments/assets/f965a0ac-12fa-4067-a92d-fb29bfaa3b59)

With Google Oauth, you can actually both log in and register(it will just look for your account in a database: if not found, register; if found, log in). Then you can freely work with your contacts.

#

<b>
But if talking seriously, all this is just for you to try out the functionality of the service. But if you want actually to use this in your purposes and see all the maximums and minimums, there is a Swagger-Documentaion: 

https://nodejs-hw-mongodb-7wu3.onrender.com/api-docs/

To use it in YOUR service, website or what else, i would recommend you to make a separate file, like "api.js" or something like that(it must to be a .js-file), where you store a link to the service. I would also recommend you to use [Axios](https://axios-http.com/) and in the it should look something like that:

</b>

```js
//random-ass-folder/api.js

import axios from "axios";

export const instance = axios.create({
    baseURL: "https://nodejs-hw-mongodb-7wu3.onrender.com/",
});

```

<b>
Then you can use it in your functions, with routes that stand in the documentation:
</b>

```js
//somewhere/auth/operations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../service/api";

// *other code*

export const apiRegister = createAsyncThunk(
"auth/register",
async (formData, thunkAPI) => {
    try {
        const { data } = await instance.post("/auth/register", formData);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const apiLogin = createAsyncThunk(
"auth/login",
async (formData, thunkAPI) => {
    try {
        const { data } = await instance.post("/auth/login", formData);
        console.log("Login data:", data);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const apiRefreshUser = createAsyncThunk(
"auth/refresh",
async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        setToken(token);
        const { data } = await instance.get("/auth/refresh");
        console.log("Refresh data:", data);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const apiLogout = createAsyncThunk(
"auth/logout",
async (_, thunkAPI) => {
    try {
        await instance.post("/auth/logout");
        clearToken();
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

```

#

<b>This is a final version of the service!</b> 

The server is being rendered on the branch "hw7-swagger".
