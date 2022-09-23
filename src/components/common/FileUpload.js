function FileUpload ({ ref, onInput }) {
  return (
    <label className='en-file-upload'>
      <input
        accept='image/*'
        type='file'
        ref={ref}
        data-buttonText='Upload file'
        onInput={(e) => onInput(e)}
        hidden
      />
      Upload from my computer
    </label>
  );
}

export default FileUpload;
