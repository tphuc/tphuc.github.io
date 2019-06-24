import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {Button, Modal} from  'react-bootstrap';
import store from '../redux/store'
import { htmlEditorChange, closeEditor} from '../redux/actions/editor'





class Editor extends Component {
    render() {
        return (
            <Modal size="lg" show={this.props.editorOpen} onHide={() => store.dispatch(closeEditor())}>
                <ReactQuill
                    style={{ minHeight: 400 }}
                    onChange={(html) => store.dispatch(htmlEditorChange(html))}
                    value={this.props.editorContent}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder='write down here'
                />
                <Button onClick={() => console.log('summit')}>sumbit</Button>
            </Modal>

        )
    }
}

Editor.modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'code-block', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

Editor.propTypes = {
    placeholder: PropTypes.string,
}
const mapStateToProps = (state) => (
    { 
        editorOpen: state.editorOpen, 
        editorContent: state.editorContent 
    }
)

export default connect(mapStateToProps)(Editor);
