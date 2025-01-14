import { useRouter } from 'next/navigation'

import {
  Button,
  Col,
  Form,
  Input,
  Row,
  UploadFile,
  UploadProps,
} from 'antd'

import { FORM_ITEM_LAYOUT } from '@/constants'

import { InboxOutlined } from "@ant-design/icons";

import { ItemFormDefaultValue } from '../../_constants'

import { FormItemProps } from '../../_interfaces'
import Dragger from 'antd/es/upload/Dragger'
import { useState } from 'react';

const FormItem = ({
  initialValues = ItemFormDefaultValue,
  isView = false,
  handleSubmit,
  loadingSubmit = false,
}: FormItemProps) => {
  const router = useRouter()

  const [form] = Form.useForm()

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const draggerProps: UploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: () => false,
    fileList: fileList,
    onChange(info) {
      setFileList(info.fileList);
    },
    maxCount:1,
    disabled: isView,
  };

  return (
    <>
      <Form
        form={form}
        {...FORM_ITEM_LAYOUT}
        initialValues={{
          ...initialValues,
        }}
        className="space-2 max-w-7xl !mx-auto"
        onFinish={data => {
          if (handleSubmit)
            handleSubmit({
              ...data,
            })
        }}
        autoComplete="off"
        scrollToFirstError
        disabled={isView || loadingSubmit}
      >
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="file"
              label="Attachment"
              rules={[
                {
                  required: !isView,
                  message: "Please input your csv attachment!",
                },
              ]}
              getValueFromEvent={(evt) => {
                return evt.fileList[0];
              }}
            >
              <Dragger {...draggerProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </Form.Item>
          </Col>
        </Row>

        <div className="text-right space-x-2">
          <Button
            onClick={() => router.back()}
            className="ml-auto"
            disabled={false}
          >
            Back
          </Button>
          {!isView && (
            <Button
              type="primary"
              htmlType="submit"
              className="ml-auto"
              loading={loadingSubmit}
              onClick={()=>handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </Form>
    </>
  )
}

export default FormItem
