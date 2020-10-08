import { Message } from "../domain";
import {
  useAllMessagesQuery,
  useSendMessageMutation,
} from "../generated/graphql";

const useMessages = () => {
  const { data, loading, error, refetch } = useAllMessagesQuery();
  const [sendMessageToGraphQl] = useSendMessageMutation({
    // refetchQueries: ["AllMessages"],
    onCompleted: () => {
      refetch();
    },
  });

  if (error) {
    throw error;
  }

  const sendMessage = (message: Message): void => {
    sendMessageToGraphQl({
      variables: {
        author: message.author,
        text: message.message,
      },
    });
  };

  return {
    messages: data?.messages ?? [],
    sendMessage,
  };
};

export default useMessages;
