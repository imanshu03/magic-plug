"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "@/Atoms/Checkbox";
import Input from "@/Atoms/Input";
import Radio from "@/Atoms/Radio";
import TextArea from "@/Atoms/TextArea";
import { CustomLink } from "@/Atoms/Links";
import { ReferrerCollection, ServiceCollection } from "@studio/types";
import { Button } from "@/Atoms/Button";
import { toast } from "react-toastify";

interface FormInputs {
  name: string;
  company: string;
  referral: string;
  services: Array<string>;
  contact: string;
  project: string;
}

interface Props {
  services: ServiceCollection;
  referrers: ReferrerCollection;
}

const Contact: React.FC<Props> = ({ services, referrers }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
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

  const onFormSubmit = async (e: FormInputs) => {
    try {
      await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          "content-type": "application/json",
        },
      });
      if (window.trackGAEvent)
        window.trackGAEvent("event", "lead_client_info", e);
      toast.success(
        "We have received your message. We will reach out to you in next 24 hours."
      );
      reset();
    } catch {
      toast.error("Something went wrong, Please try again.");
    }
  };

  return (
    <section className="w-screen min-h-screen bg-app-bg pt-[68px] sm:pt-[76px] md:pt-[84px] lg:pt-[92px] xl:pt-[100px] px-[5vw] lg:px-[10vw]">
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
        onSubmit={handleSubmit(onFormSubmit)}
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
          {referrers.map(({ name }, idx) => (
            <Radio
              label={name}
              value={name}
              className="shrink-0"
              key={idx}
              checked={watch("referral") === name}
              {...register("referral", { required: true })}
              error={!!errors.referral}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <span className="shrink-0 w-full md:w-auto">
            I&apos;m looking for help with:
          </span>
          {services.map(({ name }, idx) => (
            <Checkbox
              label={name}
              value={name}
              key={idx}
              className="shrink-0"
              id={`services.${idx}`}
              checked={watch("services").includes(name)}
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
              {/* <span className="mx-4">or</span>
              <CustomLink href="">contact us on whatsapp</CustomLink> */}
            </div>
          </div>
          <Button type="submit" className="order-1 md:order-2">
            Get in touch
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
