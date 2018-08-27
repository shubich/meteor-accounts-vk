meteor-accounts-vk
==================

Login service for VKontakte accounts (https://vk.com) without `Blaze` and `jQuery`

Usage
-----

1. Add the package to your project using meteorite:
```sh
$ meteor add shubich:accounts-vk
```

2. Configure vkontakte login service. You can do mannually or using GUI.

    **Manually**: Just add next code to your config file.
    ```js
        if (Meteor.isServer) {
            ServiceConfiguration.configurations.remove({
                service: 'vk'
            });

            ServiceConfiguration.configurations.insert({
                service: 'vk',
                appId:   '1234567',       // Your app id
                secret:  'someappsecret', // Your app secret
                scope:   'email,status'   // Your app scope
            });
        }
    ```

3. Use `Meteor.loginWithVk(options, callback)` for user authentication (you can omit `options` argument).

4. For customization of new user creation you must set 'createUser' event handler:
```js
    if (Meteor.isServer) {
        Accounts.onCreateUser(function(options, user) {
            user.custom_field = "custom value";
            // ...
            return user;
        });
    }
```

***Enjoy!***

```
If this package helped you - STAR it on github. This is not difficult for you, but important for me.
```

Dependencies
------------

1. **accounts-base**
2. **accounts-oauth**
