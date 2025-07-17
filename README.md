# Swasthya-Setu NX 🌐🩺

> Bridging the healthcare gap in rural India with technology

Swasthya-Setu NX is the upgraded version of our MERN-stack-based healthcare platform **Swasthya-Setu 1.0**. Rebuilt using cutting-edge tools like **Next.js 15**, **React 19**, **Clerk**, and **Vonage**, this full-stack web application aims to reduce **misdiagnosis and unlicensed treatments** by connecting rural patients with verified medical professionals through **secure online consultations and video calls**.
---

<img width="1470" alt="Screenshot 2025-05-27 at 1 18 06 PM" src="https://github.com/user-attachments/assets/a0d3d443-f5e1-433a-85a7-a76a3866858d" />


---

## 🚀 Key Features

- ✅ **Clerk Authentication** for secure login & role-based access
- 📅 **Book Appointments** with verified doctors
- 🎥 **Vonage Video Call Integration** for virtual consultations
- 📌 **Doctor Onboarding** & availability management
- 📖 **Patient History** & appointment notes
- 🔐 **Role-based Dashboards** (Admin, Doctor, Patient)
- 🧑‍⚕️ **Subscription Plans** for doctors
- 📦 Built with modern stack: **Next.js 15**, **React 19**, **Tailwind CSS**, **Prisma ORM**, **NeonDB**, **Shadcn UI**

---

## 🎯 Objective

India faces a significant issue of incorrect diagnoses and treatments in rural areas due to a lack of access to certified medical professionals. **Swasthya-Setu 2.0** aims to:

- ✔️ Improve accessibility to **licensed doctors** for people in remote villages
- ✔️ Provide a **video consultation platform** with robust booking and health history features
- ✔️ Reduce **morbidity and mortality** caused by quacks and uncertified practices
- ✔️ Build **digital trust** through user verification and real-time medical services

---

## 🛠️ Tech Stack

| Tech           | Description                            |
|----------------|----------------------------------------|
| `Next.js 15`   | App router, server actions, SSR, SEO   |
| `React 19`     | Concurrent rendering, modern hooks     |
| `Tailwind CSS` | Utility-first responsive styling       |
| `NeonDB`       | Postgres serverless DB                 |
| `Prisma`       | ORM for database modeling              |
| `Clerk`        | Authentication and user management     |
| `Vonage`       | Secure, HIPAA-compliant video calls    |
| `Shadcn UI`    | Accessible and stylish UI components   |

---

## 🖼️ Pages & Modules

- `/`: Landing Page
- `/dashboard`: Unified dashboard for patients, doctors, and admins
- `/apply-doctor`: Doctor onboarding form
- `/appointments`: Book & view appointment slots
- `/video-call`: Secure Vonage-powered call page
- `/admin`: Manage doctors, users, and reports

---

## 🔐 Authentication & Roles

- **Patients**: Book video consultations, view prescriptions
- **Doctors**: Manage availability, mark appointments as complete, write notes
- **Admins**: Approve doctors, manage users and reports

---

## 🗂️ Database Models (via Prisma)

- `User`: Clerk user ID, name, role, contact
- `Doctor`: Specialty, bio, availability, approval
- `Appointment`: Date, time, doctorId, patientId, status
- `CallToken`: Vonage session info
- `Note`: Added post-consultation by doctor

---

## 🧑‍💻 How to Run Locally

```bash
git clone https://github.com/mayankgaur0405/Swasthya-Setu-NX.git
cd swasthya-setu-nx
pnpm install

# Set up .env file with Clerk, Vonage, NeonDB credentials

pnpm dev

