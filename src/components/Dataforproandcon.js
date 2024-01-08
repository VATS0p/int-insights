import { useEffect, useState } from "react";
import axios from "axios";

function Dataforproandcon() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [allImage, setAllImage] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("province", province);
    formData.append("country", country);
    formData.append("collegeName", collegeName);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // Clear form fields after successful submission
      setName("");
      setProvince("");
      setCountry("");
      setCollegeName("");
      // Fetch updated data
      getImage();
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-image");
      console.log(result);
      setAllImage(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <h1>This is React WebApp</h1>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {allImage == null
        ? ""
        : allImage.map((data) => {
            return (
              <div key={data._id}>
                <img
                  src={require(`./images/${data.image}`)}
                  height={100}
                  width={100}
                  alt={data.name}
                />
                <p>Name: {data.name}</p>
                <p>Province: {data.province}</p>
                <p>Country: {data.country}</p>
                <p>College Name: {data.collegeName}</p>
              </div>
            );
          })}
    </div>
  );
}

export default Dataforproandcon;
