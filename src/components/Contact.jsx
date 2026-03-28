import {
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  X,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { useToast } from "../hooks/use-toast";

let link = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);
  const [inputValue, setInputvalue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeInput = (e) => {
    let { name, value } = e.target;
    setInputvalue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [selectedFiles]);

  const normalizeFiles = (files) =>
    files.slice(0, 3).map((file) => ({
      file,
      id: `${file.name}-${file.size}-${file.lastModified}`,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : "",
    }));

  const updateFiles = (files) => {
    setSelectedFiles((prev) => {
      prev.forEach((item) => {
        if (item.preview) {
          URL.revokeObjectURL(item.preview);
        }
      });

      return normalizeFiles(files);
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    updateFiles(files);
  };

  const removeFile = (fileId) => {
    setSelectedFiles((prev) => {
      const nextFiles = prev.filter((item) => item.id !== fileId);
      const removedFile = prev.find((item) => item.id === fileId);

      if (removedFile?.preview) {
        URL.revokeObjectURL(removedFile.preview);
      }

      return nextFiles;
    });
    setFileInputKey((prev) => prev + 1);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = Array.from(e.dataTransfer.files || []);
    updateFiles(files);
    setFileInputKey((prev) => prev + 1);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", inputValue.name);
      formData.append("email", inputValue.email);
      formData.append("message", inputValue.message);
      selectedFiles.forEach((item) => {
        formData.append("attachments", item.file);
      });

      const response = await fetch(`${link}/send-email`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email.");
      }

      toast({
        title: "Message Sent!",
        description:
          "Thank you for your message. Your email was sent successfully.",
      });
      setInputvalue({
        name: "",
        email: "",
        message: "",
      });
      selectedFiles.forEach((item) => {
        if (item.preview) {
          URL.revokeObjectURL(item.preview);
        }
      });
      setSelectedFiles([]);
      setFileInputKey((prev) => prev + 1);
    } catch (error) {
      toast({
        title: "Email Not Sent",
        description:
          error.message || "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md space-y-8">
              <h3 className="text-2xl font-semibold text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:abhilash.vc888@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      abhilash.vc888@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+919538450441"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9538-450-441
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Koramangala, Bengaluru, KA
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-center">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/abhilash-chaurasiya-1814b2138/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a href="https://www.instagram.com/abhik082" target="_blank">
                    <Instagram />
                  </a>
                  <a href="https://x.com/abhilashkumar46" target="_blank">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={inputValue.name}
                  onChange={changeInput}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Abhilash Chaurasiya..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={inputValue.email}
                  onChange={changeInput}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={inputValue.message}
                  onChange={changeInput}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="attachments"
                  className="block text-sm font-medium mb-2"
                >
                  Attach Files
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={cn(
                    "rounded-md border border-dashed bg-background transition-colors duration-300",
                    isDragActive
                      ? "border-primary bg-primary/5"
                      : "border-primary/40"
                  )}
                >
                  <label
                    htmlFor="attachments"
                    className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 cursor-pointer text-sm text-muted-foreground"
                  >
                    <Paperclip size={18} className="text-primary" />
                    <span className="font-medium text-foreground">
                      Drag and drop files here
                    </span>
                    <span>or click to browse photo, PDF, DOC, or DOCX</span>
                  </label>
                </div>
                <input
                  key={fileInputKey}
                  type="file"
                  id="attachments"
                  name="attachments"
                  multiple
                  accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  Up to 3 files, 10MB each.
                </p>
                {selectedFiles.length > 0 && (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 text-left">
                    {selectedFiles.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-lg border border-input bg-background p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            {item.preview ? (
                              <img
                                src={item.preview}
                                alt={item.file.name}
                                className="h-24 w-full rounded-md object-cover mb-3"
                              />
                            ) : (
                              <div className="h-24 w-full rounded-md bg-secondary/50 mb-3 flex items-center justify-center">
                                <FileText size={28} className="text-primary" />
                              </div>
                            )}
                            <p className="text-sm text-foreground truncate">
                              {item.file.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {Math.max(1, Math.round(item.file.size / 1024))} KB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(item.id)}
                            className="rounded-full p-1 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label={`Remove ${item.file.name}`}
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
