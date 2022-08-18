import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseDescription, choosePrice, chooseSpeed } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface CollectionFormProps {
    id?: string;
    data?:{}
};

interface CollectionState {
    name: string;
    description: string;
    price: string;
    max_speed: string;
}

export const CollectionForm = (props:CollectionFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<CollectionState>(state => state.name);
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => { window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseName(data.name));
            dispatch(chooseDescription(data.description));
            dispatch(choosePrice(data.price));
            dispatch(chooseSpeed(data.max_speed));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000);
        }
    }

  return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Bike Name</label>
                    <Input {...register('name')} name="name" placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="description">Bike Description</label>
                    <Input {...register('description')} name="description" placeholder='Description'/>
                </div>
                <div>
                    <label htmlFor="price">Bike Price</label>
                    <Input {...register('price')} name="price" placeholder='Price'/>
                </div>
                <div>
                    <label htmlFor="speed">Maximum Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder='Max Speed'/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
  )
}
