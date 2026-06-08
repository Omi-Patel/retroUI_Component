// Component imports
import TeletypeChat from '../../components/Chat/TeletypeChat';
import TeletypeChatSrc from '../../components/Chat/TeletypeChat.jsx?raw';
import TerminalChat from '../../components/Chat/TerminalChat';
import TerminalChatSrc from '../../components/Chat/TerminalChat.jsx?raw';
import MessengerChat from '../../components/Chat/MessengerChat';
import MessengerChatSrc from '../../components/Chat/MessengerChat.jsx?raw';
import NewsprintChat from '../../components/Chat/NewsprintChat';
import NewsprintChatSrc from '../../components/Chat/NewsprintChat.jsx?raw';

export const chatComponents = [
  {
    name: 'TeletypeChat',
    component: TeletypeChat,
    code: TeletypeChatSrc,
  },
  {
    name: 'TerminalChat',
    component: TerminalChat,
    code: TerminalChatSrc,
  },
  {
    name: 'MessengerChat',
    component: MessengerChat,
    code: MessengerChatSrc,
  },
  {
    name: 'NewsprintChat',
    component: NewsprintChat,
    code: NewsprintChatSrc,
  },
];

export default chatComponents;
