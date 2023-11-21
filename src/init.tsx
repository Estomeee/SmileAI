import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';


export const init = async () => {
    const user: UserInfo = await bridge.send('VKWebAppGetUserInfo', {})
    bridge.send('VKWebAppInit')
    return user

}

