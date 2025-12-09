import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { userContext } from "../../context/UserProvider";
import { toast } from "react-toastify";

function Userdata({ mode }) {
  const { user: currUser } = useContext(userContext);
  let isAdd = mode === "add";
  let isEdit = mode === "edit";
  let isProfile = mode === "profile";

  const { userId } = useParams();

  const pageTitles = {
    add: "Add New User",
    edit: "Edit User",
    profile: "My Profile",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (isAdd) {
      try {
        const res = await axios.post("https://dummyjson.com/users/add", data);
        console.log(res);
        toast.success("New user added successfully!");
      } catch (error) {
        console.log(error);
      }
    }

    if (isEdit) {
      try {
        const res = await axios.put(
          `https://dummyjson.com/users/${userId}`,
          data
        );
        console.log(res);
        toast.success("User Edited successfully!");
      } catch (error) {
        console.log(error);
      }
    }

    reset();
  };

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${userId}`);
        const user = res.data;
        console.log(user);
        reset({
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          age: user?.age,
          phone: user?.phone,
          birthDate: user?.birthDate,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (isProfile) {
      reset({
        firstName: currUser?.firstName,
        lastName: currUser?.lastName,
        email: currUser?.email,
        age: currUser?.age,
        phone: currUser?.phone,
        birthDate: currUser?.birthDate,
      });
    }

    if (isEdit) {
      fetchUserById();
    }

    if (isAdd) {
      reset();
    }
  }, [currUser, isEdit, isProfile]);

  return (
    <div className="container-fluid">
      <div className="section-head">
        <h2 className="section-title mb-0">{pageTitles[mode]}</h2>
      </div>

      <div className="container">
        <div className="form-wrapper mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="firstName"
                    aria-describedby="firstNameHelp"
                    placeholder="Enter First Name"
                    {...register("firstName", {
                      required: "First Name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    disabled={isProfile}
                  />
                  {errors.firstName && (
                    <span className="text-danger">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control py-3"
                    id="lastName"
                    aria-describedby="lastNameHelp"
                    placeholder="Enter Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                    })}
                    disabled={isProfile}
                  />
                  {errors.lastName && (
                    <span className="text-danger">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control py-3"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email address",
                      },
                    })}
                    disabled={isProfile}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="age">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control py-3"
                    id="age"
                    aria-describedby="ageHelp"
                    placeholder="Enter Age"
                    {...register("age", {
                      required: "Age is required",
                      min: {
                        value: 18,
                        message: "Age must be at least 18",
                      },
                      max: {
                        value: 100,
                        message: "Age must be less than 100",
                      },
                    })}
                    disabled={isProfile}
                  />
                  {errors.age && (
                    <span className="text-danger">{errors.age.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="phoneNumber">
                    phoneNumber
                  </label>
                  <input
                    type="tel"
                    className="form-control py-3"
                    id="phoneNumber"
                    aria-describedby="phoneNumberHelp"
                    placeholder="Enter phoneNumber"
                    {...register("phone", {
                      required: "Phone Number is required",
                    })}
                    disabled={isProfile}
                  />
                  {errors.phone && (
                    <span className="text-danger">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="birthDate">
                    Birth Date
                  </label>
                  <input
                    type="tel"
                    className="form-control py-3"
                    id="birthDate"
                    aria-describedby="birthDateHelp"
                    placeholder="Enter Birth Date"
                    {...register("birthDate", {
                      required: "Birth Date is required",
                    })}
                    disabled={isProfile}
                  />
                  {errors.birthDate && (
                    <span className="text-danger">
                      {errors.birthDate.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="w-50 mx-auto">
                  {(isAdd || isEdit) && (
                    <button type="submit" className="main-btn border-0 w-100">
                      {isAdd ? "Add New User" : "Edit User"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userdata;
