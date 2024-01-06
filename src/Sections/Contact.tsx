"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import Radio from "@/Components/Radio";
import TextArea from "@/Components/TextArea";
import { SERVICES_DATA } from "@/data";
import { CustomLink } from "@/Components/Links";
import ArrowIcon from "@/Icons/Arrow";
interface FormInputs {
  name: string;
  company: string;
  referral: string;
  services: Array<string>;
  contact: string;
  project: string;
}

const REFERRAL_DATA = ["Linkedin", "Google Search", "Word of Mouth", "Others"];

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      company: "",
      referral: "",
      services: [],
      contact: "",
      project: "",
    },
  });

  return (
    <section className="w-screen min-h-screen font-manrope bg-app-bg pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px] px-[5vw] lg:px-[10vw]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl leading-tight font-semibold">
        Let&apos;s team up and
        <br />
        make&nbsp;
        <span className="text-theme">
          M<span className="font-hurricane text-[1.5em]">agic</span>
        </span>
        &nbsp;&nbsp;happen!
      </h1>
      <form
        className="flex flex-col items-stretch justify-start text-base md:text-[2vw] font-medium mt-6 md:mt-10 lg:mt-16 tracking-wide gap-7"
        autoComplete="off"
        onSubmit={handleSubmit(console.log)}
      >
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-start gap-2">
          <span>Hi! My name is</span>
          <Input
            placeholder="type your name*"
            {...register("name", { required: true })}
            id="name"
            value={watch("name")}
            className="grow !text-left md:!text-center"
            inputClassName="!text-left md:!text-center"
            error={!!errors.name}
          />
          <span className="hidden md:inline-block">.</span>
          <span className="mt-4 md:mt-0">I work in/own</span>
          <Input
            placeholder="type your company name*"
            id="company"
            {...register("company", { required: true })}
            value={watch("company")}
            className="grow !text-left md:!text-center"
            inputClassName="!text-left md:!text-center"
            error={!!errors.company}
          />
          <span className="hidden md:inline-block">.</span>
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span className="shrink-0 mr-2 w-full md:w-auto">
            I found you through:
          </span>
          {REFERRAL_DATA.map((item, idx) => (
            <Radio
              label={item}
              value={item}
              className="shrink-0"
              key={idx}
              checked={watch("referral") === item}
              {...register("referral", { required: true })}
              error={!!errors.referral}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span className="shrink-0 w-full md:w-auto">
            I&apos;m looking for help with:
          </span>
          {SERVICES_DATA.map(({ heading }, idx) => (
            <Checkbox
              label={heading}
              value={heading}
              key={idx}
              className="shrink-0"
              id={`services.${idx}`}
              checked={watch("services").includes(heading)}
              {...register("services", { required: true })}
              error={!!errors.services}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span>Feel free to reach me at</span>
          <Input
            placeholder="type your contact email*"
            {...register("contact", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
            id="contact"
            value={watch("contact")}
            className="grow !text-left md:!text-center"
            inputClassName="!text-left md:!text-center"
            type="email"
            error={!!errors.contact}
          />
          <span>to begin the conversation.</span>
        </div>
        <div className="flex flex-col items-stretch justify-start gap-2">
          <span>I would like to share more about my project:</span>
          <TextArea
            className="grow mt-2"
            placeholder="type project details*"
            rows={2}
            id="project"
            value={watch("project")}
            {...register("project", { required: true })}
            error={!!errors.project}
          />
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between text-sm md:text-[0.6em] mt-8">
          <div className="flex flex-col mt-3 md:mt-0 items-center md:items-start justify-start order-2 md:order-1">
            <p>Don&apos;t like the forms?</p>
            <div className="flex flex-col md:flex-row items-center justify-start md:mt-2">
              <CustomLink href="mailto:hello@magicplug.tech">
                Drop us a mail on hello@magicplug.tech
              </CustomLink>
              <span className="mx-4">or</span>
              <CustomLink href="">contact us on whatsapp</CustomLink>
            </div>
          </div>
          <button
            type="submit"
            className="order-1 md:order-2 rounded-full relative [&>.btn-content]:hover:[clip-path:circle(100%)] overflow-hidden"
          >
            <div className="border border-solid border-dark-primary px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4 flex items-center justify-center rounded-full">
              Start a journey&nbsp;
              <ArrowIcon className="rotate-180" />
            </div>
            <div className="absolute left-0 top-0 w-full h-full px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-4 flex items-center justify-center btn-content [clip-path:circle(100%)] md:[clip-path:circle(0%)] bg-theme text-light-primary transition-all duration-500 ease-in-out">
              Start a journey&nbsp;
              <ArrowIcon className="rotate-180 [&>*]:stroke-light-primary" />
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
