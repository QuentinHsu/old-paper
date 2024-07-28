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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup} from 'components/ui/select';
import { Skeleton } from 'components/ui/skeleton';

// 定义表单的验证模式
const formSchema = z.object({
  firstLanguage: z.string().min(1, {
    message: "第一语言必须至少包含 1 个字符。",
  }),
  secondLanguage: z.string().min(1, {
    message: "第二语言必须至少包含 1 个字符。",
  }),
  fontFamily: z.string().min(1, {
    message: "字体必须至少包含 1 个字符。",
  }),
  layout: z.string().min(1, {
    message: "布局必须至少包含 1 个字符。",
  }),
});

const FormContent: React.FC = () => {
  // 初始化表单
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstLanguage: "",
      secondLanguage: "",
      fontFamily: "serif",
      layout: ""
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
        <FormField
          control={form.control}
          name="fontFamily"
          render={({ field }) => (
            <FormItem>
              <FormLabel>字体</FormLabel>
              <FormControl>
                <Select value={field.value} name={field.name} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择字体" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serif">Serif</SelectItem>
                    <SelectItem value="sans-serif">Sans-serif</SelectItem>
                    <SelectItem value="monospace">Monospace</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                这里是字体内容。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="layout"
          render={({ field }) => (
            <FormItem>
              <FormLabel>布局</FormLabel>
              <FormControl>
                <Select value={field.value} name={field.name} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择布局" />
                  </SelectTrigger>
                  <SelectContent className='flex'>
                    <SelectGroup>
                      <SelectItem value="one" className='flex'>
                        One
                      </SelectItem>
                      <div className="p-2">
                        <Skeleton className="h-6 m-1 w-[50%]" >
                          <span className='text-sm text-slate-400 p-2'>第一语言</span>
                        </Skeleton>
                        <Skeleton className="h-6 m-1 w-[50%]">
                          <span className='text-sm text-slate-400 p-2'>第二语言</span>
                        </Skeleton>
                      </div>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectItem value="two">
                        Two
                      </SelectItem>
                      <div className="p-2">
                        <Skeleton className="h-6 m-1 w-[50%]">
                          <span className='text-sm text-slate-400 p-2'>第二语言</span>
                        </Skeleton>
                        <Skeleton className="h-6 m-1 w-[50%]" >
                          <span className='text-sm text-slate-400 p-2'>第一语言</span>
                        </Skeleton>
                      </div>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                这里是布局选项。
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