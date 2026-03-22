from reportlab.pdfgen import canvas

def generate_certificate(name, course):
    file=f"{name}_certificate.pdf"
    c=canvas.Canvas(file)

    c.setFont("Helvetica-Bold",20)
    c.drawString(150,750,"STEALTH AI CERTIFICATE")

    c.setFont("Helvetica",14)
    c.drawString(100,650,f"This certifies that {name}")
    c.drawString(100,620,f"has completed {course}")

    c.drawString(100,580,"Authorized by STEALTH AI")

    c.save()
    return file
