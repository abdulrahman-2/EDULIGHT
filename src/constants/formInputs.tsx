const settingInputs = [
  { name: "image", label: "Profile Picture", type: "file" },
  { name: "username", label: "username", placeholder: "Enter username" },
  {
    name: "oldPassword",
    label: "Old Password",
    type: "password",
    placeholder: "Enter old password",
  },
  {
    name: "newPassword",
    label: "New Password",
    type: "password",
    placeholder: "Enter new password",
  },
];

const CreateCourseInputs = [
  {
    name: "title",
    label: "Title",
    placeholder: "Enter title",
    className: "col-span-2",
  },
  {
    name: "image",
    label: "Course Thumbnail",
    type: "file",
    className: "col-span-2",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter description",
    className: "col-span-2",
  },
  {
    fields: [
      {
        name: "category",
        label: "Course Category",
        type: "select",
        className: "col-span-1",
        options: ["Web Development", "Mobile Development", "UI/UX Design"],
      },
      {
        name: "price",
        label: "Price",
        className: "col-span-1",
        type: "number",
        placeholder: "Enter price",
      },
    ],
  },
  {
    fields: [
      {
        name: "language",
        label: "Course Language",
        type: "select",
        className: "col-span-1",
        options: ["English", "Arabic"],
      },
      {
        name: "level",
        label: "Course Level",
        type: "select",
        className: "col-span-1",
        options: ["Beginner", "Advanced"],
      },
      {
        name: "duration",
        label: "Duration",
        className: "col-span-2",
        placeholder: "Enter course duration",
      },
    ],
  },
];

const signUpInputs = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Full Name",
    className: "col-span-2",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    className: "col-span-2",
  },
  {
    fields: [
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Password",
        className: "col-span-1",
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm Password",
        className: "col-span-1",
      },
    ],
  },
  {
    name: "image",
    label: "Profile Picture",
    type: "file",
    className: "col-span-2",
  },
];

const loginInputs = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    className: "col-span-2",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    className: "col-span-2",
  },
];

export { settingInputs, CreateCourseInputs, signUpInputs, loginInputs };
