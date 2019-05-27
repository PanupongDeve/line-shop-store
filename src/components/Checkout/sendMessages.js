import axios from 'axios';

const token = 'MnnJ8txv9IVCagG/mIfw4EnavcrFEC9HMWXp8OYv/11Vk7yQ5EFmkIa2vJXNhoexzWbwgN6yU+kkOpwSrZUwcVbVZmLJ62xlPf0nZ8hqWyajO7rKhBRW6IGpGAdUq3Bgyr6Bj7dlb3qwafL9ZDKY7AdB04t89/1O/w1cDnyilFU='

export const sendMessages = async (data) => {
    const response = await axios.post('https://api.line.me/v2/bot/message/push', data, {
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    console.log(response.data);
}