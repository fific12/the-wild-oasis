import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: function () {
      toast.success("Cabin successfully deleted.");
      return queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: function (err) {
      return toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabin };
}
