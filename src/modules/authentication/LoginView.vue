<script setup>
// * LIB
import { onMounted, ref } from 'vue';
import { useForm } from 'vee-validate';
import { Icon } from '@iconify/vue';
import { toast } from 'vue-sonner';

// * COMPONETS
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/sonner';
// * SHARED
import { LoginSchema } from './AuthSchema';

const isShowPassword = ref(false);

const { handleSubmit } = useForm({
    validationSchema: LoginSchema,
    initialValues: {
        email: '',
        password: ''
    }
});

const handleShowPassword = () => {
    isShowPassword.value = !isShowPassword.value;
};

const onSubmit = handleSubmit((values) => {
    toast.success('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
    });
});
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <Card class="w-[350px] md:w-[450px]">
            <CardHeader>
                <CardTitle class="text-center">Đăng nhập</CardTitle>
            </CardHeader>
            <CardContent class="w-full">
                <form class="space-y-6 w-full flex flex-col items-center" @submit="onSubmit">
                    <FormField v-slot="{ componentField }" name="email">
                        <FormItem class="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="example@gmail.com" autocomplete="off" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="password">
                        <FormItem class="w-full">
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl class="">
                                <div class="relative">
                                    <Input
                                        :type="!isShowPassword ? 'password' : 'text'"
                                        placeholder="******"
                                        v-bind="componentField"
                                        autocomplete="off"
                                    />
                                    <span
                                        class="absolute right-4 top-1/2 text-2xl -translate-y-1/2 cursor-pointer"
                                        @click="handleShowPassword"
                                    >
                                        <Icon v-if="!isShowPassword" icon="mdi:eye-off-outline" />
                                        <Icon v-else icon="mdi:eye" />
                                    </span>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button type="submit"> Đăng nhập </Button>
                </form>
            </CardContent>
        </Card>

        <Toaster />
    </div>
</template>

<style lang="scss" scoped></style>
