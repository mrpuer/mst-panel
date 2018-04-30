import * as React from "react";
import { observer, inject } from "mobx-react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui';

const Modal = observer(({data}) => {
    return (
      <div className="modal-box">
        <Dialog
          open={data.isError}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Login and password does not match."}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please, check your data and try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={data.hideError} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
})

export default inject('data')(Modal);