import Service from "./Service";

const resource = 'users';

export default {
  get(){
    return Service.get(resource)
  },
}
