import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { catchErr } from "./util/catchErr";

/**
 * It's a custom hook that uses the useMutation hook from react-query to make an API call
 * @returns The response object is being returned.
 */
const useCustomMutation = ({ apiFunc, onSuccess, onError }) => {
  const history = useHistory();
  const response = useMutation(apiFunc, {
    exact: true,
    retry: 1,
    delay: 3000,
    onError: (error) => {
      console.log(
        "error?.response?.data?._meta?.error?.message",
        error?.response?.data?._meta?.error?.message
      );

      catchErr({
        err: error,
        alertResMessage: error?.response?.data?._meta?.error?.message,
        statuscode: error?.response?._meta?.statuscode,
        history,
      });
      !!onError && onError({ error });
    },

    onSuccess: async (data) => {
      await onSuccess({ data });
    },
  });

  return response;
};

export default useCustomMutation;
