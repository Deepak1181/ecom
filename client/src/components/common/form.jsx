import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { SelectContent, SelectItem } from "../ui/select";
import { Button } from "../ui/button";



const CommonForm = ({ formControls ,formData,setFormData,onSubmit, buttonText}) => {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    
    const value= formData[getControlItem.name]|| ""

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event=>setFormData({
              ...formData,[getControlItem.name] : event.target.value
            })}
          />
        );
        break;

      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select value={value}  onValueChange={(value)=> setFormData({...formData,[ getControlItem.name ]:value,})
            
          }>
           <SelectTrigger className="w-full">
            <SelectValue placeholder={getControlItem.label} />

           </SelectTrigger>
          <SelectContent>
            {
              getControlItem.options&& 
              getControlItem?.options.length>0 ?
              getControlItem.options.map((optionItem) => (<SelectItem key={optionItem.id} value={optionItem.id}> {optionItem.label} </SelectItem>)) : null
            }
          </SelectContent>
            

            </Select>
        );
        break;

      default:
      element=<Input name={getControlItem.name}
      placeholder={getControlItem.placeholder}
      id={getControlItem.name}
      type={getControlItem.type}
      value={value}
      onChange={event=>setFormData({
        ...formData,[getControlItem.name] : event.target.value
      })}
           />
      break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1 font-semibold">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className='mt-2 w-full'>{buttonText|| 'submit'}</Button>
    </form>
  );
};

export default CommonForm;
