// Polaroid upload — image-only picker whose previews develop as tilted polaroids.
import { useState, useRef, useEffect } from "react";
import { Camera, X } from "lucide-react";

const PolaroidUpload = () => {
  const [photos, setPhotos] = useState([]);
  const inputRef = useRef(null);
  const photosRef = useRef(photos);
  photosRef.current = photos;

  // Revoke any remaining object URLs on unmount.
  useEffect(() => {
    return () => photosRef.current.forEach((p) => URL.revokeObjectURL(p.url));
  }, []);

  const addFiles = (fileList) => {
    const next = Array.from(fileList)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({
        id: `${f.name}-${Date.now()}-${Math.random()}`,
        name: f.name,
        url: URL.createObjectURL(f),
      }));
    setPhotos((prev) => [...prev, ...next]);
  };

  const removePhoto = (id) => {
    setPhotos((prev) => {
      const photo = prev.find((p) => p.id === id);
      if (photo) URL.revokeObjectURL(photo.url);
      return prev.filter((p) => p.id !== id);
    });
  };

  return (
    <div className="w-full max-w-md bg-stone-800 text-black font-mono border-4 border-black shadow-[6px_6px_0_0_black] p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-black uppercase tracking-tight text-amber-50">
          Instant Album
        </h2>
        <button
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-amber-300 border-2 border-black shadow-[3px_3px_0_0_black] hover:shadow-[4px_4px_0_0_black] transition-all"
        >
          <Camera className="w-3.5 h-3.5" />
          Load Film
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          aria-label="Choose images to upload"
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {photos.length === 0 ? (
        /* Empty state: dashed polaroid frame */
        <div className="flex justify-center py-4">
          <div className="w-40 rotate-[-2deg] border-4 border-dashed border-amber-50/50 p-2 pb-8">
            <div className="aspect-square border-2 border-dashed border-amber-50/40 flex flex-col items-center justify-center gap-2 text-amber-50/60">
              <Camera className="w-6 h-6" aria-hidden="true" />
              <p className="text-[8px] uppercase tracking-[0.3em] text-center px-2">
                No photos developed
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ul
          className="flex flex-wrap justify-center gap-4 py-2"
          aria-label="Developed photos"
        >
          {photos.map((photo, i) => (
            <li
              key={photo.id}
              className={`relative w-36 bg-white border-2 border-black p-2 pb-1 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] ${
                i % 3 === 0
                  ? "rotate-[-3deg]"
                  : i % 3 === 1
                  ? "rotate-[2deg]"
                  : "rotate-[-1deg]"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full aspect-square object-cover border border-black bg-stone-200"
              />
              <p className="mt-1.5 pb-4 text-center text-[11px] italic font-serif text-stone-700 truncate">
                {photo.name}
              </p>
              <button
                onClick={() => removePhoto(photo.id)}
                aria-label={`Remove photo ${photo.name}`}
                className="absolute -top-2 -right-2 p-0.5 bg-red-300 border-2 border-black shadow-[2px_2px_0_0_black] hover:bg-red-400 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-center text-[8px] uppercase tracking-[0.3em] text-amber-50/50">
        Shake gently · images only · {photos.length} exposure
        {photos.length === 1 ? "" : "s"}
      </p>
    </div>
  );
};

export default PolaroidUpload;
