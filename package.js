Package.describe({
    summary: "Login service for VKontakte accounts (https://vk.com)",
    version: "0.3.0",
    git: "https://github.com/shubich/meteor-accounts-vk",
    name: "shubich:accounts-vk"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.imply('accounts-oauth', ['client', 'server']);
    api.use('service-configuration', ['client', 'server']);
    api.imply('service-configuration', ['client', 'server']);

    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'server');
    api.use('random', 'client');

    api.add_files("lib/accounts_vk.js");
    api.add_files('lib/vk_client.js', 'client');
    api.add_files('lib/vk_server.js', 'server');

    api.export('VK');

});
