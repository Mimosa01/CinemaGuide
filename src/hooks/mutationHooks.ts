import { useMutation } from "@tanstack/react-query"
import { createUser, login, logout } from "../api/User"
import { queryClient } from "../api/queryClient"
import { addFavorites, deleteFavorites } from "../api/Movie"
import { closeModal, openMessageModal } from "../store/features/modalSlice";
import { useAppDispatch } from "../store/store";

export function useLogout() {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess() {
      queryClient.invalidateQueries({})
    },
    retry: 0
  }, 
    queryClient
  );
}

export function useLogin() {
  const dispatch = useAppDispatch();
  
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
    }) => login(data),
    onSuccess() {
      dispatch(closeModal());
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] })
    }
  }, queryClient);
}

export function useRegister() {
  const dispatch = useAppDispatch();
  
  return useMutation({
    mutationFn: (data: {
      email: string;
      name: string;
      surname: string;
      password: string;
    }) => createUser(data),
    onSuccess() {
      dispatch(openMessageModal())
    },
  },
    queryClient
  ); 
}

export function useDeleteFavorites() {
  return useMutation({
    mutationFn: (id: number) => deleteFavorites(id),
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['users', 'favorites']})
    }
  }, 
    queryClient
  );
}

export function useAddFavorites() {
  return useMutation({
    mutationFn: (id: string) => addFavorites(id),
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['users', 'favorites']})
    }
  },
    queryClient
  );
}