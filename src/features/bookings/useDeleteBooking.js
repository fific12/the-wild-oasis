import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: function () {
      toast.success("Booking successfully deleted.");
      return queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: function (err) {
      return toast.error(err.message);
    },
  });

  return { isDeleting, deleteBooking };
}
