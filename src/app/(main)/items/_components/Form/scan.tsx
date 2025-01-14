import { useRouter } from 'next/navigation'

import {
  Button,
  Col,
  Form,
  Input,
  Row,
} from 'antd'

import { FORM_ITEM_LAYOUT } from '@/constants'

import { ItemFormDefaultValue } from '../../_constants'

import { FormScanProps, ScanItemInputForm } from '../../_interfaces'
import { debounce } from '@/utils/debounce'
import { FormEvent } from 'react'

const FormItem = ({
  initialValues = ItemFormDefaultValue,
  isView = false,
  handleSubmit,
  loadingSubmit = false,
}: FormScanProps) => {
  const router = useRouter()

  const [form] = Form.useForm()

  const handleInput = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    form.resetFields();
    handleSubmit({airwaybill: target.value});
  }
  const debouncedSubmit = debounce(handleInput, 1000);

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
            <Form.Item<ScanItemInputForm>
              name="airwaybill"
              label="Airway Bill"
              rules={[{ required: true }]}
            >
              <Input placeholder="Airway Bill" autoFocus onInput={(event)=>debouncedSubmit(event)} />
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
          {/* {!isView && (
            <Button
              type="primary"
              htmlType="submit"
              className="ml-auto"
              loading={loadingSubmit}
              onClick={()=>handleSubmit}
            >
              Submit
            </Button>
          )} */}
        </div>
      </Form>
    </>
  )
}

export default FormItem
