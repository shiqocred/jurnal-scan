"use client";

import dynamic from "next/dynamic";
import React, { MouseEvent, ReactNode, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { loginEmailSchema, loginPasswordSchema } from "./schemas";
import { useTranslations } from "next-intl";
import { ArrowLeftIcon, LinkIcon, LockIcon, SendIcon, Sun } from "lucide-react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { useRouter } from "@/i18n/navigation";
import { LeftSide } from "./left-side";

const renderFoot = {
  p: (chunks: ReactNode) => (
    <p className="text-sm text-slate-500 text-center">{chunks}</p>
  ),
  Link: (chunks: ReactNode) => (
    <Link href={"/register"} className="text-blue-500">
      {chunks}
    </Link>
  ),
};

const LoginPage = () => {
  const [linkSended, setLinkSended] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const router = useRouter();

  const t = useTranslations("Login");
  const schemaEmail = loginEmailSchema(t);
  const schemaPassword = loginPasswordSchema(t);

  const formEmail = useForm<z.infer<typeof schemaEmail>>({
    resolver: zodResolver(schemaEmail),
    defaultValues: {
      email: "",
    },
  });
  const formPassword = useForm<z.infer<typeof schemaPassword>>({
    resolver: zodResolver(schemaPassword),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLink = (values: z.infer<typeof schemaEmail>) => {
    setLinkSended(true);
    console.log(values);
  };

  const onChangeFormPassword = (e: MouseEvent) => {
    e.preventDefault();
    setIsPassword(true);
    formPassword.setValue("email", formEmail.getValues("email"));
  };

  const onSubmitPassword = (values: z.infer<typeof schemaEmail>) => {
    console.log(values);
    router.push("/dashboard");
  };

  return (
    <div className="w-screen h-screen overflow-hidden grid grid-cols-2">
      <LeftSide />
      <div className="w-full col-span-1 bg-white flex flex-col justify-center">
        <div className="absolute right-5 top-5 flex items-center gap-4">
          <Button size={"icon"} variant={"outline"}>
            <Sun />
          </Button>
          <LocaleSwitcher />
        </div>
        {!linkSended ? (
          <div className="flex flex-col gap-8 max-w-md w-full mx-auto justify-center">
            <h5 className="text-2xl font-semibold text-center">
              {t("form.title")}
            </h5>
            <div className="flex flex-col gap-4">
              {!isPassword ? (
                <Form {...formEmail}>
                  <form
                    onSubmit={formEmail.handleSubmit(onSubmitLink)}
                    className="space-y-5"
                  >
                    <FormField
                      control={formEmail.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.label.email")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="example@mail.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-tr from-blue-600 to-blue-400 hover:to-blue-500 transition-colors duration-300"
                    >
                      <LinkIcon />
                      {t("form.label.login.link")}
                    </Button>
                    <Button
                      type="button"
                      className="w-full bg-gradient-to-tr from-blue-700 to-blue-500 hover:to-blue-600 transition-colors duration-300"
                      onClick={onChangeFormPassword}
                    >
                      <LockIcon />
                      {t("form.label.login.password")}
                    </Button>
                  </form>
                </Form>
              ) : (
                <Form {...formPassword}>
                  <form
                    onSubmit={formPassword.handleSubmit(onSubmitPassword)}
                    className="space-y-5"
                  >
                    <FormField
                      control={formPassword.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.label.email")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="example@mail.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formPassword.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("form.label.password")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="*****"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end items-center">
                      <Link
                        href={"/forget-password"}
                        className="text-sm text-blue-500"
                      >
                        {t("form.label.forget_password")}
                      </Link>
                    </div>
                    <div className="flex items-center w-full gap-4">
                      <Button
                        type="button"
                        size={"icon"}
                        className=" bg-gradient-to-tr from-blue-600 to-blue-400 hover:to-blue-500 transition-colors duration-300"
                        onClick={() => setIsPassword(false)}
                      >
                        <ArrowLeftIcon />
                      </Button>
                      <Button
                        type="submit"
                        className="flex-auto w-full bg-gradient-to-tr from-blue-700 to-blue-500 hover:to-blue-600 transition-colors duration-300"
                      >
                        <SendIcon />
                        {t("form.label.login.submit")}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
              <div className="w-full flex items-center gap-2">
                <Separator className="flex-auto bg-slate-400" />
                <p className="text-sm font-medium text-slate-500">
                  {t("form.label.opsi")}
                </p>
                <Separator className="flex-auto bg-slate-400" />
              </div>
              <Button
                type="button"
                className="w-full bg-gradient-to-tr from-slate-800 to-slate-500 hover:to-slate-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533.5 544.3"
                >
                  <path
                    fill="#4285F4"
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  />
                  <path
                    fill="#34A853"
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  />
                  <path
                    fill="#EA4335"
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  />
                </svg>
                {t("form.label.sso.google")}
              </Button>
              <Button
                type="button"
                className="w-full bg-gradient-to-tr from-slate-800 to-slate-500 hover:to-slate-600 transition-colors duration-300"
              >
                <svg viewBox="0 0 438.549 438.549">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
                {t("form.label.sso.github")}
              </Button>
            </div>
            {t.rich("form.foot", renderFoot)}
          </div>
        ) : (
          <div className="flex flex-col gap-8 max-w-md w-full mx-auto justify-center">
            <div className="flex flex-col gap-3">
              <h5 className="text-2xl font-semibold text-center">
                Cek email anda
              </h5>
              <p className="text-slate-700 text-center">
                Tautan masuk telah dikirim ke alamat email anda.
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={() => setLinkSended(false)}>
                <ArrowLeftIcon />
                Batal
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
