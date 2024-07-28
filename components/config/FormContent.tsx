import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";

import { Textarea } from 'components/ui/textarea';

// 定义表单的验证模式
const formSchema = z.object({
  firstLanguage: z.string().min(1, {
    message: "第一语言必须至少包含 1 个字符。",
  }),
  secondLanguage: z.string().min(1, {
    message: "第二语言必须至少包含 1 个字符。",
  }),
});

const FormContent: React.FC = () => {
  // 初始化表单
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstLanguage: "",
      secondLanguage: "",
    },
  });

  // 表单提交处理
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[80%]">
        <FormField
          control={form.control}
          name="firstLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>第一语言</FormLabel>
              <FormControl>
                <Textarea placeholder="请输入第一语言
                " {...field} />
              </FormControl>
              <FormDescription>
                这里是第一语言内容。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>第二语言</FormLabel>
              <FormControl>
                <Textarea placeholder="输入第二语言" {...field} />
              </FormControl>
              <FormDescription>
                这里是第二语言内容。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
};

export default FormContent;