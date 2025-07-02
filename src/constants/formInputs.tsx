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
const contactInputs = [
{fields :[
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
    className: "col-span-1",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
    className: "col-span-1",
  },
]},
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    className: "col-span-2",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject",
    className: "col-span-2",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Send us a message",
    className: "col-span-2 ",
  },
];
const faqsInputs = [
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject",
    className: "col-span-2",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Message",
    className: "col-span-2",
  },
];
const emailInputs = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    className: "col-span-2",
  },
];
const accountSettingsInputs = [
  {
    name: "image",
    type: "file",
    label: "Image",
    className: "col-span-2",

  },
  {fields :[
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      className: "col-span-1",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      className: "col-span-1",
    },
  ]},
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Username",
    className: "col-span-2",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email Address",
    className: "col-span-2",
  },
  {
    name:"title",
    label:"Title",
    type:"text",
    placeholder:"Your tittle, proffesion or small biography",
    className:"col-span-2"
  }
]
const accountPasswordInputs = [
  {
name:"currentPassword",
label:"Current Password",
type:"password",
placeholder:"Password",
className:"col-span-2"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    className: "col-span-2",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm new Password",
    className: "col-span-2",
  },
];

export { settingInputs, CreateCourseInputs, signUpInputs, loginInputs,contactInputs,faqsInputs,emailInputs,accountSettingsInputs,accountPasswordInputs };
