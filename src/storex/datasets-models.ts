import { defineStore } from 'pinia';
import vtkPolyData from '@kitware/vtk.js/Common/DataModel/PolyData';

interface State {
  idList: string[]; // list of IDs
  dataIndex: Record<string, vtkPolyData>; // ID -> VTK object
  metadata: Record<string, {}>; // ID -> metadata
}
export const useModelStore = defineStore('models', {
  state: (): State => ({
    idList: [],
    dataIndex: {},
    metadata: {},
  }),
  actions: {
    addVTKPolyData(name: string, polyData: vtkPolyData) {
      const id = this.$id.nextID();
      console.log('add model:', polyData);
      return id;
    },
  },
});
