import * as React from 'react';

import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function Task({ item, toggleTask, renameTask }) {
    const [editing, setEditing] = React.useState(false)
    const [isEditButtonVisible, setIsEditButtonVisible] = React.useState(false)
    const [taskName, setTaskName] = React.useState(item.task)
    function handleClose() {
        setEditing(false)
    }
    function handleSubmit() {
        renameTask(item.id, taskName)
        setEditing(false)
    }
    const labelId = `checkbox-list-label-${item.task}`;
    return (
        <ListItem
            key={item.id}
            disablePadding
            onMouseEnter={() => setIsEditButtonVisible(true)}
            onMouseLeave={() => setIsEditButtonVisible(false)}
            secondaryAction={isEditButtonVisible && (
                <IconButton
                    onClick={() => setEditing(!editing)}
                    sx={{ mr: 1 }}
                    edge="end"
                >
                    <ModeEditIcon />
                </IconButton>
            )}
        >
            <ListItemButton
                role={undefined}
                onClick={() => toggleTask(item.id)}
            >
                <ListItemIcon>
                    <Checkbox
                        style={{ color: '#457b9d' }}
                        edge="start"
                        checked={item.complete}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                    />
                </ListItemIcon>
                <Stack spacing={2} direction="row">
                    {editing ? (
                        <>
                            <TextField
                                size="small"
                                id="standard-basic"
                                variant="standard"
                                value={taskName}
                                onChange={(item) => setTaskName(item.target.value)}
                            />
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                sx={{ ml: .5 }}
                            >
                                <CloseIcon />
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                variant="contained"
                                sx={{ ml: .5 }}
                            >
                                <CheckIcon />
                            </Button>
                        </>
                    ) : (
                        <ListItemText
                            id={labelId}
                            primary={taskName}
                        />
                    )}
                </Stack>
            </ListItemButton>
        </ListItem>
    )
}

export default Task