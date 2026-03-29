import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const PROFILE = {
  brand: "Abhilash Portfolio",
  name: "Abhilash Chaurasiya",
  role: "Full Stack Developer (MERN / Next.js) & AI Automation Engineer",
  email: "abhilash.vc888@gmail.com",
  phone: "+91 9538-450-441",
  location: "Koramangala, Bengaluru, Karnataka",
  linkedin: "https://www.linkedin.com/in/abhilash-chaurasiya-1814b2138/",
  github: "https://github.com/AB007-code",
  instagram: "https://www.instagram.com/abhik082",
};

const routeHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    const uploadedFiles = req.files || [];

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message: "Email service is not configured on the server.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");
    const safeRole = escapeHtml(PROFILE.role);
    const safeLocation = escapeHtml(PROFILE.location);
    const safePhone = escapeHtml(PROFILE.phone);
    const sentAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const attachmentSummary = uploadedFiles.length
      ? uploadedFiles
          .map((file) => `${file.originalname} (${Math.round(file.size / 1024)} KB)`)
          .join(", ")
      : "No attachments";
    const safeAttachmentSummary = escapeHtml(attachmentSummary);
    const emailAttachments = uploadedFiles.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    }));

    const clientEmailTemplate = `
      <div style="margin:0;padding:24px;background:#eef2ff;font-family:Arial,sans-serif;color:#1f2937;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #dbe4ff;box-shadow:0 18px 45px rgba(59,130,246,0.10);">
          <div style="padding:32px;background:linear-gradient(135deg,#0f172a 0%,#1d4ed8 55%,#7c3aed 100%);color:#ffffff;">
            <div style="display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,0.14);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
              Confirmation Email
            </div>
            <h1 style="margin:18px 0 10px;font-size:30px;line-height:1.2;font-weight:800;">Thanks for reaching out, ${safeName}</h1>
            <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.92);">
              Your message has been received. I appreciate your interest and will get back to you as soon as possible.
            </p>
          </div>

          <div style="padding:28px 28px 12px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0 14px;">
              <tr>
                <td style="width:44px;vertical-align:top;">
                  <div style="width:36px;height:36px;line-height:36px;text-align:center;border-radius:999px;background:#dbeafe;color:#1d4ed8;font-size:18px;">&#10003;</div>
                </td>
                <td style="font-size:15px;line-height:1.7;color:#334155;">
                  I received your inquiry from the portfolio website and will review it carefully.
                </td>
              </tr>
              <tr>
                <td style="width:44px;vertical-align:top;">
                  <div style="width:36px;height:36px;line-height:36px;text-align:center;border-radius:999px;background:#ede9fe;color:#7c3aed;font-size:18px;">&#9889;</div>
                </td>
                <td style="font-size:15px;line-height:1.7;color:#334155;">
                  I work on full stack products, AI automation workflows, scalable backend systems, and production-ready web applications.
                </td>
              </tr>
            </table>

            <div style="margin:20px 0 0;padding:20px;border-radius:18px;background:linear-gradient(180deg,#f8fbff 0%,#f5f3ff 100%);border:1px solid #dbe4ff;">
              <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6366f1;margin-bottom:10px;">Your Message</div>
              <div style="font-size:15px;line-height:1.8;color:#334155;">${safeMessage}</div>
            </div>

            <div style="margin-top:16px;padding:16px 18px;border-radius:16px;background:#ffffff;border:1px dashed #c7d2fe;">
              <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#7c3aed;margin-bottom:8px;">Attachments</div>
              <div style="font-size:14px;line-height:1.7;color:#475569;">${safeAttachmentSummary}</div>
            </div>

            <div style="margin-top:22px;padding:18px 20px;border-radius:18px;background:#0f172a;color:#e2e8f0;">
              <div style="font-size:18px;font-weight:700;color:#ffffff;margin-bottom:6px;">${PROFILE.name}</div>
              <div style="font-size:14px;line-height:1.6;color:#cbd5e1;">${safeRole}</div>
              <div style="margin-top:14px;font-size:13px;line-height:1.9;">
                <span style="display:inline-block;margin-right:14px;"><strong style="color:#93c5fd;">Email:</strong> <a href="mailto:${PROFILE.email}" style="color:#ffffff;text-decoration:none;">${PROFILE.email}</a></span>
                <span style="display:inline-block;margin-right:14px;"><strong style="color:#c4b5fd;">Phone:</strong> <a href="tel:+919538450441" style="color:#ffffff;text-decoration:none;">${safePhone}</a></span>
                <span style="display:inline-block;"><strong style="color:#f9a8d4;">Location:</strong> ${safeLocation}</span>
              </div>
            </div>
          </div>

          <div style="padding:20px 28px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="font-size:13px;color:#64748b;line-height:1.8;">
                  Sent from ${PROFILE.brand}<br />
                  <a href="${PROFILE.linkedin}" style="color:#2563eb;text-decoration:none;">LinkedIn</a>
                  <span style="color:#cbd5e1;"> | </span>
                  <a href="${PROFILE.github}" style="color:#2563eb;text-decoration:none;">GitHub</a>
                  <span style="color:#cbd5e1;"> | </span>
                  <a href="${PROFILE.instagram}" style="color:#2563eb;text-decoration:none;">Instagram</a>
                </td>
                <td align="right" style="font-size:12px;color:#94a3b8;vertical-align:bottom;">
                  ${sentAt}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>`;

    const leadEmailTemplate = `
      <div style="margin:0;padding:24px;background:#eff6ff;font-family:Arial,sans-serif;color:#1f2937;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #dbeafe;box-shadow:0 16px 40px rgba(37,99,235,0.10);">
          <div style="padding:28px;background:linear-gradient(135deg,#0f172a 0%,#0ea5e9 55%,#2563eb 100%);color:#ffffff;">
            <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#bfdbfe;">New Portfolio Inquiry</div>
            <h2 style="margin:10px 0 0;font-size:28px;line-height:1.25;">A new lead just came in</h2>
          </div>

          <div style="padding:28px;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#64748b;width:110px;">Name</td>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;font-weight:700;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#64748b;">Email</td>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:15px;">
                  <a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#64748b;">Received</td>
                <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${sentAt}</td>
              </tr>
            </table>

            <div style="margin-top:22px;padding:20px;border-radius:18px;background:linear-gradient(180deg,#f8fbff 0%,#eef2ff 100%);border:1px solid #dbeafe;">
              <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2563eb;margin-bottom:10px;">Message</div>
              <div style="font-size:15px;line-height:1.8;color:#334155;">${safeMessage}</div>
            </div>

            <div style="margin-top:16px;padding:16px 18px;border-radius:16px;background:#ffffff;border:1px dashed #bfdbfe;">
              <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2563eb;margin-bottom:8px;">Attachments</div>
              <div style="font-size:14px;line-height:1.7;color:#475569;">${safeAttachmentSummary}</div>
            </div>
          </div>

          <div style="padding:20px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b;">
            ${PROFILE.name} | ${safeRole}<br />
            <a href="mailto:${PROFILE.email}" style="color:#2563eb;text-decoration:none;">${PROFILE.email}</a>
            <span style="color:#cbd5e1;"> | </span>
            <a href="tel:+919538450441" style="color:#2563eb;text-decoration:none;">${safePhone}</a>
            <span style="color:#cbd5e1;"> | </span>
            ${safeLocation}
          </div>
        </div>
      </div>`;

    const clientText = `Hi ${name},

I received your message from my portfolio website. Thank you for getting in touch.

Your message:
${message}

Attachments:
${attachmentSummary}

I will get back to you as soon as possible.

${PROFILE.name}
${PROFILE.role}
${PROFILE.email}
${PROFILE.phone}
${PROFILE.location}`;

    const leadText = `New portfolio inquiry

Name: ${name}
Email: ${email}

Message:
${message}${uploadedFiles.length ? `\n\nAttachments:\n${attachmentSummary}` : ""}`;

    const mailOptions = {
      from: `"Abhilash Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER,
      subject: "Thanks for reaching out to Abhilash Portfolio",
      text: clientText,
      html: clientEmailTemplate,
      attachments: emailAttachments,
      headers: {
        "X-Entity-Ref-ID": `${Date.now()}-client-${email}`,
      },
    };

    const mailOptions1 = {
      from: `"Abhilash Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: leadText,
      html: leadEmailTemplate,
      attachments: emailAttachments,
      headers: {
        "X-Entity-Ref-ID": `${Date.now()}-lead-${email}`,
      },
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions1);

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully.",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      success: false,
      message: "Server could not send the email.",
      error: err.message,
    });
  }
};

export default routeHandler;
