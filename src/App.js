import {
  HydraAdmin,
  ResourceGuesser,
  ListGuesser,
  FieldGuesser,
  ShowGuesser,
  CreateGuesser,
  InputGuesser,
  EditGuesser
} from "@api-platform/admin";
import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';

const CustomListView = props => (
  <ListGuesser {...props}>
    <FieldGuesser source="image" />
    <FieldGuesser source="title" />
    <FieldGuesser source="authors" />
  </ListGuesser>
);

const CustomShowView = props => (
  <ShowGuesser {...props}>
    <FieldGuesser source="books" addLabel={true} />
    <FieldGuesser source="name" addLabel={true} />
  </ShowGuesser>
);

const CustomCreateForm = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="image" />
    <InputGuesser source="title" />
    <InputGuesser source="authors" />
  </CreateGuesser>
);

const CustomEditForm = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="image" />
    <InputGuesser source="title" />
    <InputGuesser source="authors" />
  </EditGuesser >
);

const theme = merge({}, defaultTheme, {
  palette: {
      // type: 'dark',
      primary: {
        main: '#109db9',  
      },
      secondary: {
        main: '#25465f',
      },
  },
  typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
  props: {
    MuiButton: {
      variant: 'outlined',
      color: 'primary',
    },
  },
  overrides: {
    MuiButton : {
      outlinedPrimary : {
        borderWidth: '2px',
        borderColor: '#109db9',
        '&:hover': {
          color: '#ffffff',
          backgroundColor: '#109db9',
          borderWidth: '2px',
          borderColor: '#109db9',
        }
      }
    }
  }
});

// Replace with your own API entrypoint
// For instance if https://example.com/api/books is the path to the collection of book resources, then the entrypoint is https://example.com/api
export default () => (
  <HydraAdmin entrypoint="http://localhost:8000/api" theme={theme}> 
      <ResourceGuesser name="books" list={CustomListView} create={CustomCreateForm} edit={CustomEditForm}/>
      <ResourceGuesser name="authors" show={CustomShowView}/>
      <ResourceGuesser name="media_objects" />
  </HydraAdmin>
);