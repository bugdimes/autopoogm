import { IgApiClient } from 'instagram-private-api'

const IG_USERNAME = "your_username";
const IG_PASSWORD = "your_password";

(async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(IG_USERNAME);
    ig.state.proxyUrl = process.env.IG_PROXY;
    await ig.account.login(IG_USERNAME, IG_PASSWORD);
    const thread = ig.entity.directThread([(await ig.user.getIdByUsername('receiver_username')).toString()]);
    await thread.broadcastText('Good Morning, Bro!');
})();