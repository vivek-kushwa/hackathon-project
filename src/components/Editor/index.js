import { Box } from "@mui/material";
import { Editor as TinyEditor } from "@tinymce/tinymce-react";
import { postFileApi } from "lib";
import { UPLOAD_IMAGE } from "services";
import { fileToFormData } from "utils/constant";

export const Editor = ({
  name,
  handleChange,
  error,
  value,
  disabled,
  // placeholder,
}) => {
  const handleEditorChange = (content) => {
    console.log("Content was updated:", content);
    handleChange(name, content);
  };
  console.log(disabled);
  return (
    <Box
      sx={{
        "& .tox-statusbar": {
          display: "none !important",
        },
        ".tox-tinymce": {
          border: "none",
        },
        "& .tox.tox-tinymce.tox-fullscreen": {
          display: "grid",
          placeItems: "center",
          background: "rgba(0, 0, 0, 0.2)",
          "& > div": {
            width: "85%",
            height: "90%",
          },
        },
        ".tox .tox-toolbar-overlord": {
          display: disabled ? "none" : "block",
        },
        border: "1.5px solid",
        borderColor:
          error || value?.length > 1500 ? "error.main" : "neutrals.300",
        borderRadius: "3px",
      }}>
      <TinyEditor
        apiKey="uvzopq2xjw4pov9gea3hnod89veaso2sa5dtepw2hgfzlgid"
        cloudChannel="5-stable"
        inline={false}
        onEditorChange={handleEditorChange}
        plugins=""
        tagName="div"
        disabled={disabled}
        textareaName={name}
        value={value}
        outputFormat="html"
        init={{
          height: 500,
          language: "en",
          menubar: false,
          plugins: [
            "advlist autolink lists link  image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen codesample",
            " media table paste emoticons hr visualblocks  help",
          ],
          a11y_advanced_options: true,
          file_picker_types: "image",
          automatic_uploads: true,
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */

            input.onchange = async function () {
              var file = await this.files[0];
              var res = await postFileApi(UPLOAD_IMAGE, fileToFormData(file));

              cb(res?.data?.imageUrl, { title: file.name });
            };

            input.click();
          },
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
            { text: "SQL", value: "sql" },
          ],
          toolbar_mode: "floating",
          content_style:
            "body { font-family: Arial, sans-serif; font-size: 14px; }",
          toolbar: [
            "undo redo |searchreplace visualblocks| formatselect|fontsizeselect |lineheight forecolor |bold italic underline",
            "strikethrough subscript superscript code removeformat|fullscreen preview | alignleft aligncenter alignright alignjustify |indent outdent | numlist bullist | eqneditor callout|",
            "link  image media table  hr blockquote codesample charmap backcolor| emoticons ",
            // "insertdatetime pagebreak | wordcount",
          ],
        }}
      />
    </Box>
  );
};
