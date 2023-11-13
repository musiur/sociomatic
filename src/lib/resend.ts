import { Resend } from "resend";

const resend = new Resend(process.env.resendKey);

const SendEmail = (payloads: any) => {
  if (resend.emails.send) {
    resend.emails.send({
      from: payloads.email,
      to: "hello@sociomatic.com",
      subject: "Hello World",
      html: `<table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.keys(payloads).map((item: any) => {
                      return `<tr> 
                            <td>${item}</td>
                            
                            <td>${
                              item === "services"
                                ? payloads[`${item}`].map((service: string) => {
                                    return ` ${service} `;
                                  })
                                : payloads[`${item}`]
                            }</td>
                        </tr>`;
                    })}
                </tbody>
            
            </table>`,
    });
  } else {
    throw new Error("Can't send Email!");
  }
};

export default SendEmail;
