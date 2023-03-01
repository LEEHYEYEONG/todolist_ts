import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, categoriesState } from "../atoms";

interface IForm {
  category: string;
}

function CreateToDo() {
  const setCategory = useSetRecoilState(categoriesState);
  const categories = useRecoilValue(categoriesState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategory((oldCategory) => {
      return {
        ...oldCategory,
        [category]: [],
      };
    });
    console.log(Object.keys(categories));
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a Category",
        })}
        placeholder="Write a Category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
