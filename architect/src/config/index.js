const env = process.env;
const listConfigs = {
    development: {
        API_SERVER: 'http://www.reddit.com'
    },
    production: {
        API_SERVER: 'http://www.reddit.com'
    }
};

export const Config = listConfigs[env];
export default env;
