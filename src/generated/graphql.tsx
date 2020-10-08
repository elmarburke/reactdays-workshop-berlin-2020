import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  text: Scalars['String'];
  author: Scalars['String'];
  createdAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Maybe<Message>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  sendMessage: Message;
};


export type MutationSendMessageArgs = {
  text: Scalars['String'];
  author: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type AllMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMessagesQuery = (
  { __typename?: 'Query' }
  & { messages: Array<Maybe<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text' | 'author'>
  )>> }
);

export type SendMessageMutationVariables = Exact<{
  text: Scalars['String'];
  author: Scalars['String'];
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'text' | 'author'>
  ) }
);


export const AllMessagesDocument = gql`
    query AllMessages {
  messages {
    id
    text
    author
  }
}
    `;

/**
 * __useAllMessagesQuery__
 *
 * To run a query within a React component, call `useAllMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMessagesQuery(baseOptions?: Apollo.QueryHookOptions<AllMessagesQuery, AllMessagesQueryVariables>) {
        return Apollo.useQuery<AllMessagesQuery, AllMessagesQueryVariables>(AllMessagesDocument, baseOptions);
      }
export function useAllMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMessagesQuery, AllMessagesQueryVariables>) {
          return Apollo.useLazyQuery<AllMessagesQuery, AllMessagesQueryVariables>(AllMessagesDocument, baseOptions);
        }
export type AllMessagesQueryHookResult = ReturnType<typeof useAllMessagesQuery>;
export type AllMessagesLazyQueryHookResult = ReturnType<typeof useAllMessagesLazyQuery>;
export type AllMessagesQueryResult = Apollo.QueryResult<AllMessagesQuery, AllMessagesQueryVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($text: String!, $author: String!) {
  sendMessage(text: $text, author: $author) {
    id
    text
    author
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      text: // value for 'text'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;