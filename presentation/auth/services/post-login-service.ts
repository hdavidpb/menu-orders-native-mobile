import { apiService } from "@/core/api/api";
import { UserInterface } from "@/presentation/interfaces/user.interface";

export const postLoginService = async (
  email: string,
  password: string,
): Promise<UserInterface | null> => {
  try {
    const { data } = await apiService.post<UserInterface>("/auth/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
