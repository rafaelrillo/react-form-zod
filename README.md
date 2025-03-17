Here’s the README.md in English for your GitHub project, well-structured and detailed. 🚀🔥

⸻

📌 README.md - React Hook Form & Zod Form Validation

# 📜 React Hook Form & Zod Form Validation

This project is a **sign-in form** built with **React Hook Form** and **Zod** for form validation. 🚀  

## 🛠️ Technologies Used
- **React** ⚛️
- **TypeScript** 🟦
- **React Hook Form** 📋
- **Zod** ✅
- **Vite** ⚡ (if you used Vite for setup)

---

## 📂 Project Structure

📂 src/
├── 📂 components/
│    ├── 📄 form/CustomForm.tsx  # Main form component
│    ├── 📄 CustomInput.tsx       # Reusable input component
│    ├── 📄 customInput.css       # Input styles
├── 📂 models/
│    ├── 📄 form.model.ts         # Validation schema with Zod
├── 📄 App.tsx                    # Main app entry point
├── 📄 main.tsx                    # App renderer
├── 📄 index.css                   # Global styles
├── 📄 README.md                   # Project documentation

---

## 🚀 Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install dependencies

npm install

3️⃣ Run the project

npm run dev

This will start the app in development mode.

⸻

📝 Form Validation

The form includes the following validations:
✔ Name: Required field.
✔ Email: Must be a valid email format and cannot be empty.
✔ Password: Minimum of 6 characters.
✔ Confirm Password: Must match the password.

If any field does not meet the validation criteria, an error message will appear below the corresponding input field.

⸻

📌 Code Breakdown

1️⃣ Validation Schema with Zod

import { z } from 'zod'

export const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
});

📌 Explanation:
	•	We define a validation schema with Zod.
	•	Each field has specific validation rules (min, email).
	•	.refine() is used to ensure the password and confirm password match.

⸻

2️⃣ Setting up React Hook Form

const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema)
});

📌 Explanation:
	•	useForm manages the form.
	•	resolver: zodResolver(schema) tells react-hook-form to use Zod for validation.
	•	errors contains validation errors.

⸻

3️⃣ Form Component (CustomForm.tsx)

<form onSubmit={handleSubmit(onSubmit)}>
  <InputForm name="name" control={control} label="Name" type="text" error={errors.name} />
  <InputForm name="email" control={control} label="Email" type="email" error={errors.email} />
  <InputForm name="password" control={control} label="Password" type="password" error={errors.password} />
  <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword} />
  <button type='submit'>Sign In</button>
</form>

📌 Explanation:
	•	Uses the InputForm component for each field.
	•	handleSubmit(onSubmit) triggers the form submission.

⸻

4️⃣ Reusable Input Component (CustomInput.tsx)

<Controller
  name={name}
  control={control}
  render={({ field }) => 
    <input id={name} type={type} {...field} className={`form-control ${error ? "isInvalid" : ""}`} />
  }
/>

📌 Explanation:
	•	Controller connects the input field with React Hook Form.
	•	If there’s an error, it displays an error message below the input.

⸻

🖼️ Form Preview

After running the project, you should see a form similar to this:

[ Name Input ]       (If empty → "Name is required")
[ Email Input ]      (If invalid → "Invalid email")
[ Password Input ]   (If less than 6 characters → "Password must be at least 6 characters")
[ Confirm Password ] (If different from Password → "Passwords do not match")

[    Sign In    ]  ← Submit button



⸻

🛠️ Future Improvements
	•	Add styles using Tailwind or Styled Components.
	•	Implement success messages after form submission.
	•	Store data in an API or database.

⸻

📜 License

This project is open-source. Feel free to modify and improve it. 😊

⸻

🔥 There you go, mate! With this README, your repo will be well-documented and professional. 🚀
If you want to add anything else or make modifications, just let me know. 💪😎
