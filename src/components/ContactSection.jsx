// components/ContactSection.jsx
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactSection() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({ mode: "onChange" });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });
      toast.success(
        "Comment posted successfully, We will get back to you soon!"
      );
      reset();
    } catch (error) {
      toast.error("Failed to post comment. You may try sending direct email");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Leave Comment
        </h2>

        <form
          className="space-y-6"
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required." })}
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-sm"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone + Website */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("phone", {
                  required: "Contact number is required.",
                })}
                placeholder="Phone"
                className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-sm"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="text"
                placeholder="Your Website"
                {...register("website")}
                className="w-full rounded-md border border-gray-300 bg-gray-100 p-3 text-sm"
              />
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="6"
              maxLength={500}
              placeholder="Your comment..."
              {...register("message", { required: "Message is required." })}
              className="w-full resize-none rounded-md border border-gray-300 bg-gray-100 p-3 text-sm"
            ></textarea>
            <p className="text-right text-xs text-gray-500">
              {watch("message")?.length || 0}/500
            </p>

            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit + Subscribe */}
          <div className="space-y-4">
            <div className="group relative w-fit">
              <button
                type="submit"
                className={`flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition ${isValid && !isSubmitting ? "bg-blue-600 text-white hover:bg-blue-700" : "cursor-not-allowed bg-gray-300 text-gray-500"}`}
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? (
                  "Posting..."
                ) : (
                  <>
                    <span>Post Comment</span> <ArrowRight size={18} />
                  </>
                )}
              </button>
              {!isValid && !isSubmitting && (
                <div className="pointer-events-none absolute -top-full left-1/2 z-10 mt-2 w-max -translate-x-1/2 rounded bg-red-500 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Fill all the required fields
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
