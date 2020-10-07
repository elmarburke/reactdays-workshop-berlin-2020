import { useSelector, useDispatch } from "react-redux";
import { Message } from "../domain";
import { State, addMessage } from "../configureStore";

const useMessages = () => {
  const messages = useSelector((state: State) => state.messages);
  const dispatch = useDispatch();

  // const [, setState] = React.useState<readonly Message[]>([]);

  // React.useEffect(() => {
  //   fetch("/messages.json")
  //     .then((response) => response.json())
  //     .then((data) => setState(data));
  // }, []);

  const sendMessage = (message: Message): void => {
    dispatch(addMessage(message));
  };

  return { messages, sendMessage };
};

export default useMessages;
