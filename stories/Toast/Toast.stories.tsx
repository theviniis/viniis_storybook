import React from 'react';
import { Story } from '@storybook/react';
import { Button, ToastProps } from '../../src/components';
import { useToast } from '../../src/components/Toast/useToast';

const Template: Story<ToastProps> = () => {
  const { toast } = useToast();
  const toastObject: ToastProps = {
    children: 'Hi there',
  };
  return (
    <>
      <Button onClick={() => toast(toastObject)}>Push Toast</Button>
    </>
  );
};

const Default: Story<ToastProps> = Template.bind({});
Default.args = {
  children: 'hello world',
};

export { Default };
